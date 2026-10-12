import React from 'react';
import { Sprout, CheckCircle2, Truck, ShoppingBag } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-12 border-t border-stone-200">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
          How Shop with Morenike Works
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-2">
          Bridging farm gates and wholesale commodity markets with retailers, restaurants, and household pantries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-sm mb-3">
            01
          </div>
          <h3 className="text-sm font-bold text-stone-900">Direct Local Aggregation</h3>
          <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
            Local farmers and verified traders advertise fresh harvests directly. No middleman markup or hoarding.
          </p>
        </div>

        {/* Step 2 */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-sm mb-3">
            02
          </div>
          <h3 className="text-sm font-bold text-stone-900">Quality & Stone-Free Checks</h3>
          <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
            Every batch of garri, rice, peppers, and palm oil undergoes physical inspection for sand, rot, and moisture balance.
          </p>
        </div>

        {/* Step 3 */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-stone-200 text-stone-900 flex items-center justify-center font-bold text-sm mb-3">
            03
          </div>
          <h3 className="text-sm font-bold text-stone-900">Dual Tier Flexibility</h3>
          <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
            Choose Household Packs for weekly cooking, or switch to Wholesale Bulk (50kg bags, crates) for commercial savings.
          </p>
        </div>

        {/* Step 4 */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs">
          <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-900 flex items-center justify-center font-bold text-sm mb-3">
            04
          </div>
          <h3 className="text-sm font-bold text-stone-900">Prompt Local Dispatch</h3>
          <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
            Goods are loaded into reinforced trucks and dispatched directly to your doorstep or interstate freight terminals.
          </p>
        </div>
      </div>
    </section>
  );
};
