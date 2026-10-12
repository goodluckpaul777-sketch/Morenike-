import React from 'react';
import { MarketPriceTrend } from '../types/market';
import { ArrowUpRight, ArrowDownRight, Minus, TrendingUp, AlertCircle, ShoppingCart } from 'lucide-react';

interface PriceWatchProps {
  trends: MarketPriceTrend[];
  onSelectCommodity?: (commodityName: string) => void;
}

export const PriceWatch: React.FC<PriceWatchProps> = ({
  trends,
  onSelectCommodity
}) => {
  return (
    <section className="bg-white rounded-2xl border border-stone-200/90 shadow-2xs p-6 mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-700" />
            <h2 className="text-lg font-bold text-stone-900 tracking-tight">
              Daily Market Price Intelligence Watch
            </h2>
          </div>
          <p className="text-xs text-stone-500 mt-1">
            Real-time price survey from Mile 12, Bodija, and Dawanau wholesale hubs. Updated daily for smart retail purchasing.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Live Market Survey: October 2026</span>
        </div>
      </div>

      {/* Commodity Price Grid */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.map((item, index) => {
          const isUp = item.trend === 'up';
          const isDown = item.trend === 'down';

          return (
            <div
              key={index}
              className="p-4 rounded-xl border border-stone-200 hover:border-amber-700/40 bg-stone-50/50 hover:bg-white transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-stone-900">
                    {item.commodity}
                  </h3>
                  <div
                    className={`inline-flex items-center gap-0.5 text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                      isDown
                        ? 'text-emerald-700 bg-emerald-50'
                        : isUp
                        ? 'text-rose-700 bg-rose-50'
                        : 'text-stone-600 bg-stone-100'
                    }`}
                  >
                    {isDown && <ArrowDownRight className="w-3.5 h-3.5" />}
                    {isUp && <ArrowUpRight className="w-3.5 h-3.5" />}
                    {!isDown && !isUp && <Minus className="w-3.5 h-3.5" />}
                    <span>{Math.abs(item.changePercent)}%</span>
                  </div>
                </div>

                <div className="text-xs text-stone-500 mt-0.5">
                  Unit: {item.unit}
                </div>
                <div className="text-[11px] text-stone-400 mt-0.5">
                  Hub: {item.marketLocation}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/70 flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Today's Avg Price</div>
                  <div className="text-base font-bold font-mono text-stone-900 tabular-nums">
                    ₦{item.currentPrice.toLocaleString()}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-stone-400 uppercase font-semibold">Previous Week</div>
                  <div className="text-xs font-mono text-stone-500 tabular-nums line-through">
                    ₦{item.previousPrice.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Advisory strip */}
      <div className="mt-5 p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-center gap-3 text-xs text-amber-950">
        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
        <p className="leading-relaxed">
          <strong>Market Tip from Morenike:</strong> Pepper & tomato harvest from Jos is stabilizing, driving prices down by ~9%. Retailers and bulk caterers are advised to lock in weekly orders now before weekend festive spikes.
        </p>
      </div>
    </section>
  );
};
