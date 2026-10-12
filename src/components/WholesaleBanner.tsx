import React from 'react';
import { Package, Truck, Check, ArrowRight, ShieldCheck, Scale } from 'lucide-react';

interface WholesaleBannerProps {
  onSelectRetailerMode: () => void;
  onOpenAdvertiseModal: () => void;
}

export const WholesaleBanner: React.FC<WholesaleBannerProps> = ({
  onSelectRetailerMode,
  onOpenAdvertiseModal,
}) => {
  return (
    <div id="wholesale-section" className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 mb-12 shadow-lg border border-stone-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <span>Retailer & Commercial Supply Program</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Supplying Restaurants, Supermarkets & Food Resellers
          </h2>

          <p className="mt-3 text-sm text-stone-300 leading-relaxed max-w-2xl">
            Are you a grocery store owner, restaurant chef, food caterer, or boarding school procurement officer? Access wholesale farm bags, crates, and 25L jerrycans at direct source prices with reliable delivery schedules and payment terms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs">
                <strong className="text-white block">Volume Wholesale Tiers</strong>
                <span className="text-stone-400">Save 12% to 20% per full sack or crate</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs">
                <strong className="text-white block">Guaranteed Net Weight</strong>
                <span className="text-stone-400">Scale-verified 50kg bags and full measures</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="text-xs">
                <strong className="text-white block">Scheduled Haulage</strong>
                <span className="text-stone-400">Weekly supply drops directly to your store</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
          <button
            type="button"
            onClick={onSelectRetailerMode}
            className="w-full py-3 px-5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>View Wholesale Bulk Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenAdvertiseModal}
            className="w-full py-3 px-5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>Advertise Goods to Retailers</span>
          </button>
        </div>
      </div>
    </div>
  );
};
