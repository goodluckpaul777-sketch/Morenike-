import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Leaf, ShieldCheck, Truck, PlusCircle } from 'lucide-react';

interface FooterProps {
  onOpenAdvertiseModal: () => void;
  onSelectCategory: (cat: any) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAdvertiseModal,
  onSelectCategory,
}) => {
  return (
    <footer className="bg-emerald-950 text-emerald-100 pt-12 pb-8 border-t border-emerald-900 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-emerald-900/80">
          {/* Col 1: About Agrohandlers style */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
                <Leaf className="w-5 h-5 text-amber-300" />
              </div>
              <span className="text-lg font-black text-white">Shop with Morenike</span>
            </div>
            <p className="text-xs text-emerald-200/90 leading-relaxed">
              Online food market for retail and bulk Nigerian agricultural commodities and groceries. Quick doorstep delivery of fresh food ingredients and consumables to retailers, caterers and households.
            </p>
            <div className="mt-4 space-y-2 text-xs text-emerald-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: <strong className="text-white">09028106224</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: <strong className="text-white">09028106224</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Top Departments */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <button
                  onClick={() => onSelectCategory('peppers_vegetables')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Peppers, Tomatoes & Vegetables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('tubers')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Tubers & Roots (Benue & Abakaliki Yam)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('grains')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Grains & Flours (Garri Ijebu, Rice, Beans)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('oils_fats')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Pure Red Palm Oil & Groundnut Oil
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('frozen_foods')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Frozen Foods (Titus, Shawa, Chicken)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('pasta_packaged')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Pasta & Packaged (Semovita, Spaghetti, Indomie)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('drinks_beverages')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Drinks & Beverages (Milk, Juices, Malt)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('hampers')}
                  className="hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Food Hampers & Festive Baskets
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Vendor Ads */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900">
              Vendor Advertising & Services
            </h4>
            <ul className="space-y-2 text-xs text-emerald-200">
              <li>
                <button
                  onClick={onOpenAdvertiseModal}
                  className="text-amber-400 font-bold hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Advertise Your Local Market Goods</span>
                </button>
              </li>
              <li><span>Wholesale Sacks (50kg) & Bulk Crates</span></li>
              <li><span>Restaurant & School Food Supply</span></li>
              <li><span>Daily Market Price Intelligence Watch</span></li>
              <li><span>Waybill & Cargo Haulage Nationwide</span></li>
              <li><span>Delivery to Lagos, UK, Canada & USA</span></li>
            </ul>
          </div>

          {/* Col 4: Market Hub & Hours */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-emerald-900">
              Aggregation Hubs & Dispatch
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Central Market Annex: Mile 12 Agricultural Hub, Lagos State, Nigeria</span>
              </div>
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Same-day dispatch for orders placed before 11:00 AM</span>
              </div>
              <div className="pt-2">
                <span className="text-emerald-400 font-semibold block">Operating Hours:</span>
                <span>Mon – Sat: 7:00 AM – 6:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300 gap-3">
          <div>
            © {new Date().getFullYear()} <strong>Shop with Morenike</strong> (Agrohandlers Marketplace Architecture). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Quality Inspected</span>
            </span>
            <span>·</span>
            <span>Honest Net Scale Weights</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
