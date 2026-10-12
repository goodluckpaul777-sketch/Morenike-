import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Truck, ArrowRight, HeartHandshake } from 'lucide-react';

interface AgroPromoBannersProps {
  onOpenAdvertiseModal: () => void;
  onExploreProducts: () => void;
}

export const AgroPromoBanners: React.FC<AgroPromoBannersProps> = ({
  onOpenAdvertiseModal,
  onExploreProducts
}) => {
  return (
    <div className="space-y-8 my-10">
      {/* 2-Column Agrohandlers Feature Promo Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Banner 1: Customer Care Support Desk */}
        <div className="bg-gradient-to-br from-emerald-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm flex flex-col justify-between border border-emerald-800/50">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-3 border border-emerald-400/30">
              <Phone className="w-3.5 h-3.5" />
              <span>Dedicated Customer Support</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
              Have Questions or Special Bulk Orders?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Our market concierge is available Monday to Saturday to assist with caterer orders, restaurant supplies, and interstate transport waybills.
            </p>
          </div>

          <div className="relative z-10 mt-6 pt-5 border-t border-emerald-800/60 flex flex-wrap items-center gap-3">
            <a
              href="tel:+2349028106224"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +234 902 810 6224</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?text=Hello%20Agrohandlers,%20I%20would%20like%20to%20inquire%20about%20foodstuffs&phone=+2349028106224"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Real Customer Care Image from Agrohandlers */}
          <div className="absolute right-0 bottom-0 w-36 sm:w-44 h-full pointer-events-none opacity-25 sm:opacity-35 mix-blend-luminosity">
            <img
              src="/agrohandlers/banners/cutomercare.jpg"
              alt="Customer Care"
              className="w-full h-full object-cover object-left"
            />
          </div>
        </div>

        {/* Banner 2: Quality & Sourcing Assurance */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xs flex flex-col justify-between border border-stone-200">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-3 border border-amber-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
              <span>Agrohandlers Sourcing Guarantee</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-tight">
              100% Quality Inspected at Dawn
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm">
              We eliminate middlemen markups. Every sack of grains is guaranteed stone-free, oils are 100% virgin unadulterated, and fresh peppers are sorted for zero spoilage.
            </p>
          </div>

          <div className="relative z-10 mt-6 pt-5 border-t border-stone-100 flex items-center gap-4">
            <button
              onClick={onExploreProducts}
              className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
            >
              <span>Explore Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenAdvertiseModal}
              className="text-xs font-bold text-amber-800 hover:text-amber-900 underline underline-offset-2"
            >
              Sell Your Produce
            </button>
          </div>

          {/* Quality Artwork from Agrohandlers */}
          <div className="absolute right-2 bottom-2 w-32 sm:w-40 pointer-events-none opacity-80">
            <img
              src="/agrohandlers/banners/about-bellemata.png"
              alt="Agrohandlers Guarantee"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Featured Agrohandlers Food Baskets by Category Banner Strip */}
      <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              Agrohandlers Food Basket Insights
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Food Baskets & Market Commodity Categories
            </h3>
          </div>
          <button
            onClick={onExploreProducts}
            className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>Browse All Baskets</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative rounded-xl overflow-hidden group bg-stone-800 border border-stone-700/60 flex items-center">
            <div className="w-1/3 h-28 sm:h-32 shrink-0 overflow-hidden">
              <img
                src="/agrohandlers/banners/blog-1.jpg"
                alt="Food Baskets by Category"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wide">Category Guide</div>
              <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                Seasonal Food Baskets by Produce Category
              </h4>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                Discover bundled packages for grains, tubers, seasonings, and cooking oils curated for households.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden group bg-stone-800 border border-stone-700/60 flex items-center">
            <div className="w-1/3 h-28 sm:h-32 shrink-0 overflow-hidden">
              <img
                src="/agrohandlers/banners/blog-2.jpg"
                alt="Agrohandlers Wholesale Logistics"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wide">Direct Delivery</div>
              <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                Doorstep Delivery Across Lagos & Inter-State
              </h4>
              <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                Carefully packaged in reinforced cartons, burlap sacks, and sealed jugs for temperature safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
