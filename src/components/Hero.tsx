import React from 'react';
import { Search, ShoppingBag, PlusCircle, ShieldCheck, Truck, Scale, Sparkles } from 'lucide-react';
import { TargetAudience } from '../types/market';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  audienceFilter: TargetAudience;
  setAudienceFilter: (audience: TargetAudience) => void;
  onOpenAdvertiseModal: () => void;
  onExploreProducts: () => void;
  totalAdvertisedCount: number;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  audienceFilter,
  setAudienceFilter,
  onOpenAdvertiseModal,
  onExploreProducts,
  totalAdvertisedCount
}) => {
  return (
    <section className="relative bg-gradient-to-b from-stone-100 via-stone-50 to-white pt-8 pb-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-kicker */}
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-3 font-medium">
          <span>Farm Gates & Central Market Hubs</span>
          <span aria-hidden="true">·</span>
          <span>Retailers & Household Buyers</span>
          <span aria-hidden="true">·</span>
          <span>Verified Local Foodstuffs</span>
        </div>

        {/* 2-Column Split Hero with balanced spatial presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15] text-balance">
              Fresh Local Foodstuffs for{' '}
              <span className="text-amber-800">Retailers</span> and{' '}
              <span className="text-emerald-800">Consumers</span>.
            </h1>

            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
              From Mile 12 baskets to Benue farm-gate tubers and pure Ondo palm oil. Sourced directly from local farmers and authentic market handlers at transparent prices with fast doorstep delivery.
            </p>

            {/* Two Clean Rows of Hero Controls */}
            <div className="mt-6 space-y-3">
              {/* Row 1: Search Bar & Primary Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search peppers, garri, yam tubers, palm oil, crayfish..."
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/30 focus:border-amber-700 text-stone-900 placeholder-stone-400 shadow-2xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onOpenAdvertiseModal}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Advertise Your Goods</span>
                </button>
              </div>

              {/* Row 2: Audience Filter Segmented Switcher */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl w-fit">
                  <button
                    type="button"
                    onClick={() => setAudienceFilter('both')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      audienceFilter === 'both'
                        ? 'bg-white text-stone-900 shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    All Market Goods
                  </button>
                  <button
                    type="button"
                    onClick={() => setAudienceFilter('retailers')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      audienceFilter === 'retailers'
                        ? 'bg-amber-800 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Retailer Wholesale (Bags & Crates)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAudienceFilter('consumers')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      audienceFilter === 'consumers'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Household & Consumer Packs
                  </button>
                </div>

                <div className="text-[11px] text-stone-500 hidden md:block">
                  {totalAdvertisedCount > 0 ? `${totalAdvertisedCount} partner ads live` : 'Direct farm-to-table'}
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs text-stone-500">
              Farmers, market stall holders & food distributors:{' '}
              <button
                onClick={onOpenAdvertiseModal}
                className="text-amber-800 font-semibold underline underline-offset-2 hover:text-amber-900 cursor-pointer"
              >
                Advertise your produce to over 15,000 active buyers
              </button>
            </div>
          </div>

          {/* Right Hero Showcase Card (Domain-Native Market Hub Card) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 shadow-md border border-stone-800 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Subtle background graphic texture */}
              <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-amber-600/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    Direct Market Dispatch
                  </div>
                  <div className="text-xs text-stone-400 font-mono">
                    Today's Harvest
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Hand-Selected Produce, Inspected at Source
                </h3>
                <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                  Morenike's ground scouts inspect every sack of beans, basket of scotch bonnet, and carton of smoked fish at early morning dispatch hubs to ensure zero stone count, zero spoilage, and direct farm pricing.
                </p>

                {/* Live Showcase Metric Grid */}
                <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-stone-800">
                  <div className="bg-stone-800/80 rounded-xl p-3 border border-stone-700/60">
                    <div className="text-xs text-stone-400 font-medium">Wholesale Minimum</div>
                    <div className="text-base font-bold text-amber-300 mt-0.5">1 Full Bag / Crate</div>
                    <div className="text-[11px] text-stone-400 mt-1">Up to 20% bulk discount</div>
                  </div>
                  <div className="bg-stone-800/80 rounded-xl p-3 border border-stone-700/60">
                    <div className="text-xs text-stone-400 font-medium">Household Minimum</div>
                    <div className="text-base font-bold text-emerald-400 mt-0.5">1 Small Measure</div>
                    <div className="text-[11px] text-stone-400 mt-1">Ready for home pantry</div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Strip */}
              <div className="mt-5 pt-4 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Weevil & Stone Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Doorstep Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-cyan-400" />
                  <span>Honest Net Weight</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
