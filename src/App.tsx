import React, { useState, useEffect, useMemo } from 'react';
import { Product, CartItem, Category, TargetAudience, DeliveryZone, OrderDetails } from './types/market';
import { INITIAL_PRODUCTS, MARKET_PRICE_WATCH, DELIVERY_ZONES } from './data/mockProducts';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { NavMenu } from './components/NavMenu';
import { AgroHero } from './components/AgroHero';
import { AgroProductCard } from './components/AgroProductCard';
import { ProductModal } from './components/ProductModal';
import { AdvertiseGoodsModal } from './components/AdvertiseGoodsModal';
import { CartView } from './components/CartView';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { PriceWatch } from './components/PriceWatch';
import { WholesaleBanner } from './components/WholesaleBanner';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { 
  PlusCircle, 
  ArrowUpDown, 
  X, 
  Check, 
  ShoppingBag, 
  LayoutGrid, 
  StretchHorizontal, 
  Package, 
  Home, 
  Search,
  CheckCircle2,
  Phone,
  Flame,
  Clock
} from 'lucide-react';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Commodities' },
  { id: 'peppers_vegetables', label: 'Peppers & Vegetables' },
  { id: 'tubers', label: 'Tubers & Roots' },
  { id: 'grains', label: 'Grains & Flours' },
  { id: 'oils_fats', label: 'Oils & Cooking Fats' },
  { id: 'proteins_seafood', label: 'Smoked Fish & Seafood' },
  { id: 'spices_seasonings', label: 'Spices & Locust Beans' },
];

export default function App() {
  // Load products (combine initial with user-advertised products in localStorage)
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('morenike_advertised_goods');
      if (saved) {
        const parsed = JSON.parse(saved);
        return [...parsed, ...INITIAL_PRODUCTS];
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('morenike_cart');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Active view: marketplace | cart | price_watch | wholesale
  const [activeView, setActiveView] = useState<'marketplace' | 'cart' | 'price_watch' | 'wholesale'>('marketplace');

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [audienceFilter, setAudienceFilter] = useState<TargetAudience>('both');
  const [sortBy, setSortBy] = useState<'featured' | 'price_asc' | 'price_desc' | 'freshness'>('featured');
  const [layoutMode, setLayoutMode] = useState<'two_rows' | 'grid'>('two_rows');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  // Modals state
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);
  const [isAdvertiseModalOpen, setIsAdvertiseModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [checkoutZone, setCheckoutZone] = useState<DeliveryZone>(DELIVERY_ZONES[0]);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [trackInput, setTrackInput] = useState('');
  const [trackResult, setTrackResult] = useState<string | null>(null);

  // Toast feedback state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save cart
  useEffect(() => {
    try {
      localStorage.setItem('morenike_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Cart totals
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Handle Add To Cart
  const handleAddToCart = (product: Product, tier: 'consumer' | 'retailer', quantity: number) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.productId === product.id && i.selectedTier === tier
      );

      const option = tier === 'consumer' ? product.consumerOption : product.retailerOption;

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      return [
        ...prev,
        {
          productId: product.id,
          product,
          selectedTier: tier,
          unitLabel: option.label,
          unitPrice: option.price,
          quantity,
        },
      ];
    });

    setToastMessage(`Added ${quantity}x ${product.name} to cart`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdateCartQuantity = (productId: string, tier: 'consumer' | 'retailer', quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(productId, tier);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId && item.selectedTier === tier
          ? { ...item, quantity }
          : item
      )
    );
  };

  const handleRemoveCartItem = (productId: string, tier: 'consumer' | 'retailer') => {
    setCart((prev) =>
      prev.filter((item) => !(item.productId === productId && item.selectedTier === tier))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Adding newly advertised product
  const handleAddNewProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);

    try {
      const saved = localStorage.getItem('morenike_advertised_goods');
      const existing = saved ? JSON.parse(saved) : [];
      localStorage.setItem('morenike_advertised_goods', JSON.stringify([newProduct, ...existing]));
    } catch (e) {
      console.error(e);
    }

    setToastMessage(`"${newProduct.name}" has been advertised successfully!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Filtered and Sorted Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Audience filter
      if (audienceFilter !== 'both') {
        if (p.audience !== 'both' && p.audience !== audienceFilter) {
          return false;
        }
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesLocal = p.localName?.toLowerCase().includes(query);
        const matchesOrigin = p.origin.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesLocal && !matchesOrigin && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price_asc') {
        return a.consumerOption.price - b.consumerOption.price;
      }
      if (sortBy === 'price_desc') {
        return b.consumerOption.price - a.consumerOption.price;
      }
      if (sortBy === 'freshness') {
        return b.freshnessScore - a.freshnessScore;
      }
      return 0; // featured order
    });
  }, [products, selectedCategory, audienceFilter, searchQuery, sortBy]);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackInput.trim()) return;
    setTrackResult(
      `Order ${trackInput.toUpperCase()} is currently [SCHEDULED FOR HARVEST DISPATCH] at Mile 12 Central Hub. Expected dispatch within 24 hours.`
    );
  };

  return (
    <div className="min-h-screen bg-stone-100/50 text-stone-900 font-sans flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. AGROHANDLERS TOP UTILITY BAR */}
      <TopBar
        onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
        onOpenTrackOrder={() => setTrackingModalOpen(true)}
      />

      {/* 2. AGROHANDLERS MAIN HEADER */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartItemCount={cartItemCount}
        cartTotal={cartSubtotal}
        onOpenCart={() => setActiveView('cart')}
        onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
        onGoHome={() => {
          setActiveView('marketplace');
          setSelectedCategory('all');
          setAudienceFilter('both');
        }}
      />

      {/* 3. AGROHANDLERS GREEN CATEGORY NAV BAR */}
      <NavMenu
        isCategoryMenuOpen={isCategoryMenuOpen}
        setIsCategoryMenuOpen={setIsCategoryMenuOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
        activeView={activeView}
        setActiveView={setActiveView}
        onSelectAudience={(aud) => setAudienceFilter(aud)}
      />

      {/* MAIN VIEW CONTROLLER */}
      <main className="flex-1">
        {/* VIEW: CART PAGE (agrohandlers.com/cart) */}
        {activeView === 'cart' && (
          <CartView
            items={cart}
            onUpdateQuantity={handleUpdateCartQuantity}
            onRemoveItem={handleRemoveCartItem}
            onClearCart={handleClearCart}
            onBackToMarket={() => setActiveView('marketplace')}
            onProceedToCheckout={(zone) => {
              setCheckoutZone(zone);
              setIsCheckoutModalOpen(true);
            }}
          />
        )}

        {/* VIEW: DAILY MARKET PRICE WATCH */}
        {activeView === 'price_watch' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  Daily Market Price Watch & Intelligence
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  Compare today's commodity market prices across Mile 12, Bodija, and Dawanau grain exchanges.
                </p>
              </div>
              <button
                onClick={() => setActiveView('marketplace')}
                className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-50 cursor-pointer"
              >
                Return to Storefront
              </button>
            </div>
            <PriceWatch trends={MARKET_PRICE_WATCH} />
          </div>
        )}

        {/* VIEW: MARKETPLACE (AGROHANDLERS HOMEPAGE LAYOUT) */}
        {activeView === 'marketplace' && (
          <>
            {/* AGROHANDLERS HERO (Category Sidebar + Featured Banner + 4 Trust Badges) */}
            <AgroHero
              isCategoryMenuOpen={isCategoryMenuOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
              onExploreProducts={() => {
                const el = document.getElementById('products-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onSelectAudience={(aud) => setAudienceFilter(aud)}
            />

            {/* PRODUCT CATALOG & CATEGORIES SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="products-section">
              {/* Agrohandlers Department Filter Bar */}
              <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-2xs mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Category Filter Tabs */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                          selectedCategory === cat.id
                            ? 'bg-emerald-800 text-white shadow-2xs'
                            : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Secondary Controls (Audience Switcher + Two Rows Toggle + Sort) */}
                  <div className="flex items-center gap-3 shrink-0 self-end md:self-auto">
                    {/* Audience pills */}
                    <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-lg text-xs">
                      <button
                        onClick={() => setAudienceFilter('both')}
                        className={`px-2 py-1 rounded font-semibold cursor-pointer ${
                          audienceFilter === 'both' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'text-stone-600'
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setAudienceFilter('retailers')}
                        className={`px-2 py-1 rounded font-semibold cursor-pointer ${
                          audienceFilter === 'retailers' ? 'bg-amber-600 text-white font-bold' : 'text-stone-600'
                        }`}
                      >
                        Retailers (Bulk)
                      </button>
                      <button
                        onClick={() => setAudienceFilter('consumers')}
                        className={`px-2 py-1 rounded font-semibold cursor-pointer ${
                          audienceFilter === 'consumers' ? 'bg-emerald-700 text-white font-bold' : 'text-stone-600'
                        }`}
                      >
                        Consumers
                      </button>
                    </div>

                    {/* Layout mode switcher: Two Rows vs Grid */}
                    <div className="flex items-center bg-stone-100 p-1 rounded-lg">
                      <button
                        onClick={() => setLayoutMode('two_rows')}
                        className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors cursor-pointer ${
                          layoutMode === 'two_rows' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'text-stone-600'
                        }`}
                        title="Display in two organized shelves"
                      >
                        <StretchHorizontal className="w-3.5 h-3.5 text-emerald-800" />
                        <span className="hidden sm:inline">Two Rows</span>
                      </button>
                      <button
                        onClick={() => setLayoutMode('grid')}
                        className={`flex items-center gap-1 px-2 py-1 text-xs rounded transition-colors cursor-pointer ${
                          layoutMode === 'grid' ? 'bg-white text-stone-900 font-bold shadow-2xs' : 'text-stone-600'
                        }`}
                        title="Display in standard grid"
                      >
                        <LayoutGrid className="w-3.5 h-3.5 text-stone-700" />
                        <span className="hidden sm:inline">Grid</span>
                      </button>
                    </div>

                    {/* Sort selector */}
                    <div className="flex items-center gap-1">
                      <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="text-xs font-semibold bg-white border border-stone-200 rounded-lg px-2 py-1 text-stone-800 focus:outline-none"
                      >
                        <option value="featured">Featured</option>
                        <option value="price_asc">Price: Low to High</option>
                        <option value="price_desc">Price: High to Low</option>
                        <option value="freshness">Freshness</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Filter info text & Advertise Produce shortcut */}
                <div className="mt-3 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div>
                    Showing <strong>{filteredProducts.length}</strong> farm commodities
                    {searchQuery && ` matching "${searchQuery}"`}
                  </div>
                  <button
                    onClick={() => setIsAdvertiseModalOpen(true)}
                    className="text-emerald-800 hover:text-emerald-950 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <PlusCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Advertise your farm produce here</span>
                  </button>
                </div>
              </div>

              {/* PRODUCTS SHELVES: TWO ROWS VIEW vs GRID */}
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center my-6">
                  <ShoppingBag className="w-12 h-12 mx-auto text-stone-300 mb-3" />
                  <h3 className="text-base font-bold text-stone-900">No commodities match your criteria</h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                    Try clearing search queries or switching between retail and wholesale options.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setAudienceFilter('both');
                    }}
                    className="mt-4 px-4 py-2 text-xs font-semibold bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : layoutMode === 'two_rows' ? (
                <div className="space-y-10 my-4">
                  {/* ROW 1: RETAILER WHOLESALE COMMODITIES (BAGS & CRATES) */}
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-stone-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-600 text-white uppercase tracking-wider">
                            Row 1
                          </span>
                          <h2 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                            <Package className="w-4 h-4 text-amber-700" />
                            <span>Wholesale Bulk Hub for Retailers & Commercial Buyers</span>
                          </h2>
                        </div>
                        <p className="text-xs text-stone-500 mt-1">
                          Direct 50kg farm sacks, wooden crates, and 25L drums with wholesale tier discounts (Save 12% to 20%) for restaurants, schools, and supermarkets.
                        </p>
                      </div>

                      <div className="text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200/60 shrink-0 self-start sm:self-auto">
                        Wholesale Prices
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {filteredProducts.map((product) => (
                        <AgroProductCard
                          key={`retailer-${product.id}`}
                          product={product}
                          preferredTier="retailer"
                          onAddToCart={handleAddToCart}
                          onOpenDetails={(p) => setInspectingProduct(p)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* ROW 2: HOUSEHOLD CONSUMER FRESH HARVEST (PANTRY MEASURES) */}
                  <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-stone-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-700 text-white uppercase tracking-wider">
                            Row 2
                          </span>
                          <h2 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-1.5">
                            <Home className="w-4 h-4 text-emerald-700" />
                            <span>Fresh Household Market Baskets & Consumer Packs</span>
                          </h2>
                        </div>
                        <p className="text-xs text-stone-500 mt-1">
                          Paint bucket measures, small stew baskets, 5L gallons, and clean stone-free foodstuffs for family cooking.
                        </p>
                      </div>

                      <div className="text-xs font-bold text-emerald-900 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200/60 shrink-0 self-start sm:self-auto">
                        Household Prices
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {filteredProducts.map((product) => (
                        <AgroProductCard
                          key={`consumer-${product.id}`}
                          product={product}
                          preferredTier="consumer"
                          onAddToCart={handleAddToCart}
                          onOpenDetails={(p) => setInspectingProduct(p)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* UNIFIED 4-COLUMN AGROHANDLERS GRID VIEW */
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6">
                  {filteredProducts.map((product) => (
                    <AgroProductCard
                      key={product.id}
                      product={product}
                      preferredTier={audienceFilter === 'retailers' ? 'retailer' : 'consumer'}
                      onAddToCart={handleAddToCart}
                      onOpenDetails={(p) => setInspectingProduct(p)}
                    />
                  ))}
                </div>
              )}

              {/* B2B Wholesale Supply Banner */}
              <div className="mt-12">
                <WholesaleBanner
                  onSelectRetailerMode={() => {
                    setAudienceFilter('retailers');
                    const el = document.getElementById('products-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
                />
              </div>

              {/* Daily Market Price Watch Section */}
              <div className="mt-4">
                <PriceWatch trends={MARKET_PRICE_WATCH} />
              </div>

              {/* Sourcing & Logistics Explainer */}
              <div id="about-section">
                <HowItWorks />
              </div>
            </div>
          </>
        )}
      </main>

      {/* 4. AGROHANDLERS 4-COLUMN FOOTER */}
      <Footer
        onOpenAdvertiseModal={() => setIsAdvertiseModalOpen(true)}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setActiveView('marketplace');
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }}
      />

      {/* MODALS */}
      {/* 1. Product Detail Modal */}
      <ProductModal
        product={inspectingProduct}
        onClose={() => setInspectingProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* 2. Advertise Local Market Goods Portal Modal */}
      <AdvertiseGoodsModal
        isOpen={isAdvertiseModalOpen}
        onClose={() => setIsAdvertiseModalOpen(false)}
        onAddProduct={handleAddNewProduct}
      />

      {/* 3. Direct Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        items={cart}
        deliveryZone={checkoutZone}
        onOrderSuccess={(order) => {
          setIsCheckoutModalOpen(false);
          setConfirmedOrder(order);
          setCart([]);
        }}
      />

      {/* 4. Order Confirmed Receipt Modal */}
      <OrderSuccessModal
        order={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onBackToMarket={() => {
          setConfirmedOrder(null);
          setActiveView('marketplace');
        }}
      />

      {/* 5. Order Tracking Modal */}
      {trackingModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-4 bg-emerald-900 text-white flex items-center justify-between">
              <h3 className="text-sm font-bold">Track Your Order</h3>
              <button
                onClick={() => {
                  setTrackingModalOpen(false);
                  setTrackResult(null);
                  setTrackInput('');
                }}
                className="text-stone-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleTrackSubmit} className="p-6 space-y-4">
              <p className="text-xs text-stone-600">
                Enter your Order Reference Number (e.g., <strong>SWM-104928</strong>) or Phone Number to check dispatch status.
              </p>
              <div>
                <input
                  type="text"
                  required
                  value={trackInput}
                  onChange={(e) => setTrackInput(e.target.value)}
                  placeholder="Enter SWM Reference Number..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700 font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
              >
                Check Dispatch Status
              </button>
              {trackResult && (
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <p>{trackResult}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-emerald-950 text-white px-4 py-3 rounded-xl shadow-lg border border-emerald-800 flex items-center gap-2.5 text-xs font-semibold animate-fade-in">
          <Check className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
