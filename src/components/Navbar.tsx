import React from 'react';
import { ShoppingBag, PlusCircle, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  cartItemCount: number;
  cartTotal: number;
  onOpenCart: () => void;
  onOpenAdvertiseModal: () => void;
  activeView: 'marketplace' | 'cart' | 'price_watch';
  setActiveView: (view: 'marketplace' | 'cart' | 'price_watch') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItemCount,
  cartTotal,
  onOpenCart,
  onOpenAdvertiseModal,
  activeView,
  setActiveView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => setActiveView('marketplace')}
            className="text-left text-xl font-bold tracking-tight text-stone-900 whitespace-nowrap shrink-0 hover:text-amber-800 transition-colors cursor-pointer"
          >
            Shop with Morenike
          </button>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <button
              onClick={() => setActiveView('marketplace')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'marketplace' ? 'text-stone-900 font-semibold' : ''
              }`}
            >
              Marketplace
            </button>
            <a
              href="#wholesale-section"
              onClick={() => setActiveView('marketplace')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              Wholesale & Retail
            </a>
            <button
              onClick={onOpenAdvertiseModal}
              className="hover:text-amber-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              Advertise Goods
              <PlusCircle className="w-3.5 h-3.5 text-amber-700" />
            </button>
            <button
              onClick={() => setActiveView('price_watch')}
              className={`hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeView === 'price_watch' ? 'text-stone-900 font-semibold' : ''
              }`}
            >
              Price Watch
            </button>
            <a
              href="#how-it-works"
              onClick={() => setActiveView('marketplace')}
              className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0"
            >
              How It Works
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0 group"
              aria-label={`Shopping Cart with ${cartItemCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Cart</span>
              <span className="font-mono text-xs bg-stone-800 px-1.5 py-0.5 rounded text-amber-300 tabular-nums">
                {cartItemCount}
              </span>
              {cartTotal > 0 && (
                <span className="hidden sm:inline font-mono tabular-nums text-stone-300 border-l border-stone-700 pl-2">
                  ₦{cartTotal.toLocaleString()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
