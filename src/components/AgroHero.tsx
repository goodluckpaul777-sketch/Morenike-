import React from 'react';
import { Category } from '../types/market';
import { 
  Sprout, 
  Flame, 
  ShoppingBag, 
  PlusCircle, 
  Truck, 
  ShieldCheck, 
  Scale, 
  MessageCircle, 
  ChevronRight,
  Fish,
  Wheat,
  Droplet
} from 'lucide-react';

interface AgroHeroProps {
  isCategoryMenuOpen: boolean;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  onOpenAdvertiseModal: () => void;
  onExploreProducts: () => void;
  onSelectAudience: (aud: 'both' | 'retailers' | 'consumers') => void;
}

export const AgroHero: React.FC<AgroHeroProps> = ({
  isCategoryMenuOpen,
  selectedCategory,
  setSelectedCategory,
  onOpenAdvertiseModal,
  onExploreProducts,
  onSelectAudience,
}) => {
  const categoryItems = [
    { id: 'all' as Category, label: 'All Market Commodities', icon: '🛒' },
    { id: 'peppers_vegetables' as Category, label: 'Peppers, Tomatoes & Veggies', icon: '🌶️' },
    { id: 'tubers' as Category, label: 'Tubers & Roots (Benue Yam)', icon: '🥔' },
    { id: 'grains' as Category, label: 'Grains & Flours (Rice, Garri)', icon: '🌾' },
    { id: 'oils_fats' as Category, label: 'Pure Palm Oil & Groundnut Oil', icon: '🛢️' },
    { id: 'proteins_seafood' as Category, label: 'Smoked Catfish & Oron Crayfish', icon: '🐟' },
    { id: 'spices_seasonings' as Category, label: 'Indigenous Spices & Iru', icon: '🧂' },
  ];

  return (
    <div className="bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Left: Agrohandlers Vertical Category Menu */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
              <div className="bg-emerald-900 text-white px-4 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Market Departments</span>
              </div>
              <ul className="divide-y divide-stone-100 text-xs font-medium text-stone-700">
                {categoryItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setSelectedCategory(item.id);
                        onExploreProducts();
                      }}
                      className={`w-full px-4 py-2.5 flex items-center justify-between text-left transition-colors cursor-pointer hover:bg-emerald-50 hover:text-emerald-900 ${
                        selectedCategory === item.id ? 'bg-emerald-50 text-emerald-900 font-bold border-l-4 border-emerald-700' : ''
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={onOpenAdvertiseModal}
                    className="w-full px-4 py-2.5 flex items-center justify-between text-left text-amber-800 bg-amber-50/70 hover:bg-amber-100 font-bold transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <PlusCircle className="w-4 h-4 text-amber-700" />
                      <span>Advertise Your Goods</span>
                    </div>
                    <span className="text-[10px] bg-amber-200 text-amber-900 px-1.5 py-0.2 rounded font-bold uppercase">Free</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Center/Right: Agrohandlers Featured Campaign Banner */}
          <div className="lg:col-span-9 flex flex-col gap-5">
            {/* Main Promotional Banner */}
            <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-10 shadow-md relative overflow-hidden flex flex-col justify-between min-h-[320px]">
              {/* Background organic shape */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-3 border border-amber-400/30">
                  <span>Farm-Fresh · Stone-Free · Wholesale & Retail</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                  Fresh Food Items & Groceries Delivered To Your Doorstep
                </h1>

                <p className="mt-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-lg">
                  Shop directly from local farmers and authentic wholesale handlers. Fresh peppers, Benue yam tubers, clean garri, and pure palm oil in retail packs or 50kg sacks.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onExploreProducts}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Shop All Products</span>
                  </button>

                  <button
                    onClick={onOpenAdvertiseModal}
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <PlusCircle className="w-4 h-4 text-amber-300" />
                    <span>Advertise Produce (Retail & Bulk)</span>
                  </button>
                </div>
              </div>

              {/* Bottom Quick Audience Switcher */}
              <div className="relative z-10 mt-6 pt-4 border-t border-emerald-700/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="text-emerald-200 font-medium">Browse by Buyer Mode:</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectAudience('retailers');
                      onExploreProducts();
                    }}
                    className="px-3 py-1 rounded bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    Retailer Wholesale (Bags & Crates)
                  </button>
                  <button
                    onClick={() => {
                      onSelectAudience('consumers');
                      onExploreProducts();
                    }}
                    className="px-3 py-1 rounded bg-emerald-700 hover:bg-emerald-600 text-white font-semibold transition-colors cursor-pointer"
                  >
                    Household Consumer Packs
                  </button>
                </div>
              </div>
            </div>

            {/* Agrohandlers 4 Feature Trust Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Fresh Sourcing</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Direct from local farms</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Retail & Bulk</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Paint buckets to 50kg bags</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Quick Delivery</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Lagos & Nationwide</div>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-stone-200/90 shadow-2xs flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">Order WhatsApp</div>
                  <div className="text-[11px] text-stone-500 leading-tight mt-0.5">Instant dispatch desk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
