import React, { useState, useEffect } from 'react';
import { Category } from '../types/market';
import { 
  ShoppingBag, 
  PlusCircle, 
  Truck, 
  ShieldCheck, 
  Scale, 
  MessageCircle, 
  ChevronRight,
  ChevronLeft,
  Search,
  Sparkles
} from 'lucide-react';

interface AgroHeroProps {
  isCategoryMenuOpen: boolean;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  onOpenAdvertiseModal: () => void;
  onExploreProducts: () => void;
  onSelectAudience: (aud: 'both' | 'retailers' | 'consumers') => void;
}

export const AGRO_CATEGORIES_DATA = [
  { 
    id: 'peppers_vegetables' as Category, 
    label: 'Veggies & Peppers', 
    image: '/agrohandlers/categories/PRC020-066f6a54d630d4.jpeg',
    subtitle: 'Tatashe, Tomatoes & Bawa'
  },
  { 
    id: 'tubers' as Category, 
    label: 'Tubers & Roots', 
    image: '/agrohandlers/categories/PRC019-066f6a67a7a730.jpeg',
    subtitle: 'Giant Benue & Abakaliki Yam'
  },
  { 
    id: 'grains' as Category, 
    label: 'Grains & Seeds', 
    image: '/agrohandlers/categories/PRC012-066f6a58a312dc.jpeg',
    subtitle: 'Garri, Rice, Beans & Ogbono'
  },
  { 
    id: 'oils_fats' as Category, 
    label: 'Edible Oil', 
    image: '/agrohandlers/categories/PRC002-066fd4d6f883f3.jpeg',
    subtitle: 'Palm Oil, Devon Kings, Mamador'
  },
  { 
    id: 'frozen_foods' as Category, 
    label: 'Frozen Foods', 
    image: '/agrohandlers/categories/PRC013-066f6a4db626e8.jpeg',
    subtitle: 'Titus, Shawa, Panla, Chicken'
  },
  { 
    id: 'proteins_seafood' as Category, 
    label: 'Seafood & Proteins', 
    image: '/agrohandlers/categories/PRC007-066f6a5174975f.jpeg',
    subtitle: 'Oron Crayfish & Smoked Fish'
  },
  { 
    id: 'pasta_packaged' as Category, 
    label: 'Pasta & Packaged Foods', 
    image: '/agrohandlers/categories/PRC006-066f6d84c01a2c.jpeg',
    subtitle: 'Semovita, Spaghetti, Indomie'
  },
  { 
    id: 'spices_seasonings' as Category, 
    label: 'Seasonings & Spices', 
    image: '/agrohandlers/categories/PRC017-066f6a5c4014db.jpeg',
    subtitle: 'Maggi, Tasty Cubes, Salt, Tomato Mix'
  },
  { 
    id: 'drinks_beverages' as Category, 
    label: 'Drinks & Beverages', 
    image: '/agrohandlers/categories/PRC008-066f6a61ddc483.jpeg',
    subtitle: 'Peak Milk, Maltina, Chivita, Coke'
  },
  { 
    id: 'hampers' as Category, 
    label: 'Food Hampers', 
    image: '/agrohandlers/categories/PRC021-067532600cdc94.png',
    subtitle: 'Corporate & Family Gift Baskets'
  },
  { 
    id: 'all' as Category, 
    label: 'Bulk Wholesale Market', 
    image: '/agrohandlers/categories/PRC018-066fd570a88854.jpeg',
    subtitle: '50kg Sacks & Full Master Cartons'
  },
];

const SLIDES = [
  {
    image: '/agrohandlers/slides/1.jpg',
    badge: 'Direct Farm Hub Sourcing',
    title: 'Fresh Food Items & Groceries Delivered To Your Doorstep',
    description: 'Shop farm-fresh bell peppers, Benue yam tubers, virgin red palm oil, and clean grain sacks directly at wholesale & retail market rates.',
    cta: 'Shop Now'
  },
  {
    image: '/agrohandlers/slides/4.jpg',
    badge: 'Restaurant & Caterer Hub',
    title: 'Wholesale Bulk Supply For Food Businesses & Families',
    description: 'Get commercial 50kg bags of rice, cartons of frozen Titus & Shawa fish, and 25L Devon King’s oils with certified doorstep delivery.',
    cta: 'Explore Wholesale'
  },
  {
    image: '/agrohandlers/slides/5.jpg',
    badge: '100% Quality Guaranteed',
    title: 'Stone-Free Grains, Fresh Farm Vegetables & Edible Oils',
    description: 'Every basket and sack is inspected at dawn to guarantee honest scale weights, zero sand, and unadulterated freshness.',
    cta: 'View Market Deals'
  },
  {
    image: '/agrohandlers/slides/6.jpg',
    badge: 'Festive & Corporate Packs',
    title: 'Specialized Food Hampers & Bundled Family Baskets',
    description: 'Curated provisions containing premium vegetable oils, semovita, pasta, seasonings, and beverages ready for gifting.',
    cta: 'Order Hampers'
  }
];

export const AgroHero: React.FC<AgroHeroProps> = ({
  isCategoryMenuOpen,
  selectedCategory,
  setSelectedCategory,
  onOpenAdvertiseModal,
  onExploreProducts,
  onSelectAudience,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto advance slides every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Main Grid: Left Category Menu + Center/Right Carousel Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left: Agrohandlers Vertical Department Sidebar with Real Category Thumbnails */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="bg-emerald-900 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>All Departments</span>
                <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1.5 py-0.5 rounded font-mono">11</span>
              </div>
              <ul className="divide-y divide-stone-100 text-xs font-medium text-stone-700 max-h-[460px] overflow-y-auto scrollbar-thin">
                {AGRO_CATEGORIES_DATA.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        setSelectedCategory(item.id);
                        onExploreProducts();
                      }}
                      className={`w-full px-3 py-2 flex items-center justify-between text-left transition-colors cursor-pointer hover:bg-emerald-50 hover:text-emerald-900 group ${
                        selectedCategory === item.id ? 'bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-700' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img 
                          src={item.image} 
                          alt={item.label} 
                          className="w-7 h-7 rounded-full object-cover shrink-0 border border-stone-200 group-hover:scale-105 transition-transform" 
                        />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onOpenAdvertiseModal}
                    className="w-full px-3 py-2.5 flex items-center justify-between text-left text-amber-800 bg-amber-50/80 hover:bg-amber-100 font-bold transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <PlusCircle className="w-4 h-4 text-amber-700" />
                      <span>Advertise Your Produce</span>
                    </div>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-bold uppercase">Free</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Center/Right: Agrohandlers Carousel Slider */}
          <div className="lg:col-span-9 flex flex-col gap-4">
            {/* Interactive Carousel Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-stone-900 text-white min-h-[340px] sm:min-h-[380px] flex items-center group">
              {/* Background Slides */}
              {SLIDES.map((slide, idx) => (
                <div
                  key={slide.image}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 pointer-events-auto z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover brightness-[0.78] contrast-[1.05]"
                  />
                  {/* Subtle dark gradient overlay to guarantee text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-900/60 to-transparent"></div>

                  {/* Slide Content */}
                  <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10 max-w-xl">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-stone-950 text-xs font-bold mb-3 w-fit shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{slide.badge}</span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm">
                      {slide.title}
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-stone-200 leading-relaxed drop-shadow-xs max-w-lg">
                      {slide.description}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        onClick={onExploreProducts}
                        className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer flex items-center gap-2 hover:scale-102"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>{slide.cta}</span>
                      </button>

                      <button
                        onClick={onOpenAdvertiseModal}
                        className="px-4 py-2.5 bg-stone-900/75 hover:bg-stone-900 text-white border border-white/30 backdrop-blur-xs text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2"
                      >
                        <PlusCircle className="w-4 h-4 text-amber-400" />
                        <span>Advertise Produce</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Prev / Next Slider Arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-white/20"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer border border-white/20"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators Dots */}
              <div className="absolute bottom-4 left-6 sm:left-10 z-20 flex items-center gap-2">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'w-6 bg-amber-400' : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Agrohandlers 4 Feature Trust Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Fresh Sourcing</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Direct from local farms</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Retail & Wholesale</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Paint buckets to 50kg bags</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Quick Delivery</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Lagos & Interstate</div>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Order Desk</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">+234 902 810 6224</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agrohandlers Popular Category Thumbnails Circular Strip (Direct from agrohandlers.com) */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                Shop By Agrohandlers Categories
              </h3>
              <p className="text-xs text-stone-500">
                Select any department to view verified wholesale and retail commodities
              </p>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onExploreProducts();
              }}
              className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
            {AGRO_CATEGORIES_DATA.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    onExploreProducts();
                  }}
                  className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/20 shadow-xs'
                      : 'bg-white border-stone-200/80 hover:border-emerald-300 hover:shadow-xs'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-stone-200 mb-2 shadow-2xs group-hover:scale-105 transition-transform bg-stone-100">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className={`text-[11px] font-bold leading-tight ${isSelected ? 'text-emerald-900' : 'text-stone-800 group-hover:text-emerald-800'}`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
