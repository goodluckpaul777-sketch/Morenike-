import React from 'react';
import { Search, ShoppingCart, User, PlusCircle, Leaf, PhoneCall } from 'lucide-react';
import { Category } from '../types/market';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: Category;
  setSelectedCategory: (cat: Category) => void;
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenAdvertiseModal: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  cartItemCount,
  cartTotal,
  onOpenCart,
  onOpenAdvertiseModal,
  onGoHome,
}) => {
  return (
    <header className="bg-white border-b border-stone-200 py-3.5 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo - Agrohandlers Green & Harvest Gold */}
          <button
            onClick={onGoHome}
            className="flex items-center gap-2.5 text-left shrink-0 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:bg-emerald-800 transition-colors">
              <Leaf className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-900 tracking-tight leading-none">
                Shop with Morenike
              </div>
              <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mt-0.5">
                Food Market · Retail & Bulk
              </div>
            </div>
          </button>

          {/* Centered Large Search Bar (Agrohandlers signature layout) */}
          <div className="hidden lg:flex flex-1 max-w-2xl items-center border-2 border-emerald-700 rounded-lg overflow-hidden bg-white shadow-2xs">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as Category)}
              className="bg-stone-50 text-xs font-semibold text-stone-700 px-3 py-2.5 border-r border-stone-200 focus:outline-none cursor-pointer"
            >
              <option value="all">All Categories</option>
              <option value="peppers_vegetables">Veggies & Peppers</option>
              <option value="tubers">Tubers & Roots</option>
              <option value="grains">Grains & Seeds</option>
              <option value="oils_fats">Edible Oil</option>
              <option value="frozen_foods">Frozen Foods</option>
              <option value="proteins_seafood">Seafood & Fish</option>
              <option value="pasta_packaged">Pasta & Packaged</option>
              <option value="spices_seasonings">Seasonings & Spices</option>
              <option value="drinks_beverages">Drinks & Beverages</option>
              <option value="hampers">Food Hampers</option>
            </select>

            {/* Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search food items, garri, rice, peppers, palm oil..."
                className="w-full px-4 py-2 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none"
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

            {/* Search Button */}
            <button
              type="button"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>
          </div>

          {/* Right Action Icons (Advertise Goods, Account, Cart) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Advertise Goods Button */}
            <button
              onClick={onOpenAdvertiseModal}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-colors cursor-pointer shadow-2xs"
            >
              <PlusCircle className="w-4 h-4 text-amber-700" />
              <span>Advertise Goods</span>
            </button>

            {/* Call to Order shortcut for mobile */}
            <a
              href="tel:09028106224"
              className="md:hidden p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200"
              title="Call to Order"
            >
              <PhoneCall className="w-5 h-5" />
            </a>

            {/* Cart Button (Agrohandlers Cart) */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg transition-colors cursor-pointer shadow-xs group"
              aria-label={`Shopping Cart with ${cartItemCount} items`}
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-amber-300 group-hover:scale-105 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-amber-500 text-stone-950 font-bold text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-mono">
                  {cartItemCount}
                </span>
              </div>
              <div className="hidden sm:block text-left pl-1">
                <div className="text-[10px] uppercase font-semibold text-emerald-200 leading-tight">
                  My Cart
                </div>
                <div className="text-xs font-bold font-mono text-white leading-tight">
                  ₦{cartTotal.toLocaleString()}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-3 flex items-center border border-emerald-700 rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search garri, rice, peppers, yam tubers..."
            className="w-full px-3 py-2 text-xs text-stone-900 focus:outline-none"
          />
          <button
            type="button"
            className="bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
