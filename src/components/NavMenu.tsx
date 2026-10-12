import React from 'react';
import { Menu, ChevronDown, Phone, Sparkles, PlusCircle } from 'lucide-react';
import { Category } from '../types/market';

interface NavMenuProps {
  isCategoryMenuOpen: boolean;
  setIsCategoryMenuOpen: (open: boolean) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  onOpenAdvertiseModal: () => void;
  activeView: 'marketplace' | 'cart' | 'price_watch' | 'wholesale';
  setActiveView: (view: 'marketplace' | 'cart' | 'price_watch' | 'wholesale') => void;
  onSelectAudience: (aud: 'both' | 'retailers' | 'consumers') => void;
}

export const NavMenu: React.FC<NavMenuProps> = ({
  isCategoryMenuOpen,
  setIsCategoryMenuOpen,
  selectedCategory,
  setSelectedCategory,
  onOpenAdvertiseModal,
  activeView,
  setActiveView,
  onSelectAudience,
}) => {
  return (
    <nav className="bg-emerald-800 text-white border-b border-emerald-900 shadow-sm relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: "ALL CATEGORIES" Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="flex items-center justify-between gap-3 bg-emerald-900 hover:bg-emerald-950 px-5 py-3 text-xs font-bold tracking-wider uppercase text-white transition-colors cursor-pointer w-56 sm:w-64"
            >
              <div className="flex items-center gap-2">
                <Menu className="w-4 h-4 text-amber-300" />
                <span>All Categories</span>
              </div>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Center Links */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => {
                setActiveView('marketplace');
                onSelectAudience('both');
              }}
              className={`px-3 py-3 hover:text-amber-300 transition-colors cursor-pointer ${
                activeView === 'marketplace' ? 'text-amber-300 font-bold' : 'text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setActiveView('marketplace');
                onSelectAudience('retailers');
              }}
              className="px-3 py-3 hover:text-amber-300 transition-colors cursor-pointer text-white flex items-center gap-1"
            >
              <span>Wholesale Bulk Hub</span>
              <span className="bg-amber-500 text-stone-900 text-[9px] px-1.5 py-0.2 rounded font-bold uppercase">
                Bags & Crates
              </span>
            </button>
            <button
              onClick={() => {
                setActiveView('marketplace');
                onSelectAudience('consumers');
              }}
              className="px-3 py-3 hover:text-amber-300 transition-colors cursor-pointer text-white"
            >
              Household Packs
            </button>
            <button
              onClick={onOpenAdvertiseModal}
              className="px-3 py-3 text-amber-300 hover:text-amber-200 transition-colors cursor-pointer font-bold flex items-center gap-1"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Advertise Produce</span>
            </button>
            <button
              onClick={() => setActiveView('price_watch')}
              className={`px-3 py-3 hover:text-amber-300 transition-colors cursor-pointer ${
                activeView === 'price_watch' ? 'text-amber-300 font-bold' : 'text-white'
              }`}
            >
              Daily Price Watch
            </button>
            <a
              href="#about-section"
              onClick={() => setActiveView('marketplace')}
              className="px-3 py-3 hover:text-amber-300 transition-colors text-white"
            >
              Delivery & Hubs
            </a>
          </div>

          {/* Right: Quick Order Hotline */}
          <div className="hidden sm:flex items-center gap-2 text-xs text-amber-300 font-semibold py-2">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Call to Order: <strong className="text-white">09028106224</strong></span>
          </div>
        </div>
      </div>
    </nav>
  );
};
