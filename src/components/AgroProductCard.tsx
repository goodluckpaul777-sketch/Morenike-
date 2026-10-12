import React, { useState } from 'react';
import { Product } from '../types/market';
import { ProductVisual } from './ProductVisual';
import { ShoppingCart, Plus, Minus, Check, Star, Info } from 'lucide-react';

interface AgroProductCardProps {
  product: Product;
  onAddToCart: (product: Product, tier: 'consumer' | 'retailer', quantity: number) => void;
  onOpenDetails: (product: Product) => void;
  preferredTier?: 'consumer' | 'retailer';
}

export const AgroProductCard: React.FC<AgroProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetails,
  preferredTier = 'consumer',
}) => {
  const [selectedTier, setSelectedTier] = useState<'consumer' | 'retailer'>(preferredTier);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const activeOption = selectedTier === 'consumer' ? product.consumerOption : product.retailerOption;

  const handleAdd = () => {
    onAddToCart(product, selectedTier, quantity);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <div className="bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Visual / Image Slot */}
        <div className="cursor-pointer relative" onClick={() => onOpenDetails(product)}>
          <ProductVisual product={product} className="h-44" />
          
          {/* Discount / Wholesale badge if wholesale selected */}
          {selectedTier === 'retailer' && product.retailerOption.wholesaleSavingsPercent && (
            <span className="absolute top-2 left-2 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs">
              Save {product.retailerOption.wholesaleSavingsPercent}% Bulk
            </span>
          )}
        </div>

        {/* Content Body */}
        <div className="p-3.5 sm:p-4">
          <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mb-1">
            {product.category.replace('_', ' ')} · {product.origin}
          </div>

          <h3
            onClick={() => onOpenDetails(product)}
            className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {product.localName && (
            <p className="text-[11px] text-stone-500 italic truncate mt-0.5">
              {product.localName}
            </p>
          )}

          {/* Rating & Stock */}
          <div className="flex items-center gap-1.5 mt-1.5 text-xs">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] text-stone-400 font-medium">(100% Quality)</span>
          </div>

          {/* PROMINENT DUAL PRICE & SIZE SELECTION */}
          <div className="mt-3 pt-2.5 border-t border-stone-200">
            <div className="flex items-center justify-between text-[11px] text-stone-600 mb-1.5 font-bold uppercase tracking-wider">
              <span>Select Size & Price:</span>
              <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                selectedTier === 'retailer' ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
              }`}>
                {selectedTier === 'retailer' ? 'Wholesale Selected' : 'Retail Selected'}
              </span>
            </div>

            {/* Price Option 1: Household */}
            <button
              type="button"
              onClick={() => setSelectedTier('consumer')}
              className={`w-full p-2 mb-1.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                selectedTier === 'consumer'
                  ? 'border-emerald-700 bg-emerald-50/70 ring-1 ring-emerald-700/30'
                  : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
              }`}
            >
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wide text-stone-500 block">
                  Household Pack
                </span>
                <span className="text-xs font-semibold text-stone-800 truncate block">
                  {product.consumerOption.label}
                </span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-bold font-mono text-emerald-900 tabular-nums">
                  ₦{product.consumerOption.price.toLocaleString()}
                </div>
              </div>
            </button>

            {/* Price Option 2: Wholesale Bulk */}
            <button
              type="button"
              onClick={() => setSelectedTier('retailer')}
              className={`w-full p-2 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                selectedTier === 'retailer'
                  ? 'border-amber-700 bg-amber-50/70 ring-1 ring-amber-700/30'
                  : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
              }`}
            >
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800">
                    Wholesale Bulk
                  </span>
                  {product.retailerOption.wholesaleSavingsPercent && (
                    <span className="text-[9px] font-bold bg-amber-200 text-amber-900 px-1 py-0.2 rounded">
                      Save {product.retailerOption.wholesaleSavingsPercent}%
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-stone-800 truncate block">
                  {product.retailerOption.label}
                </span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-sm font-bold font-mono text-amber-900 tabular-nums">
                  ₦{product.retailerOption.price.toLocaleString()}
                </div>
              </div>
            </button>

            {/* Large Active Price Display Banner */}
            <div className="mt-2.5 p-2 bg-stone-100 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">Active Price:</span>
                <span className="text-lg font-black font-mono text-emerald-950 tabular-nums">
                  ₦{activeOption.price.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-500 block font-medium">Net Unit:</span>
                <span className="text-xs font-semibold text-stone-700 truncate block max-w-[120px]">
                  {selectedTier === 'retailer' ? 'Wholesale Tier' : 'Household Tier'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer: Agrohandlers "ADD TO CART" green button */}
      <div className="p-3.5 sm:p-4 pt-0">
        <div className="flex items-center gap-2">
          {/* Stepper */}
          <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50 overflow-hidden shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-2 py-1.5 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-6 text-center text-xs font-mono font-bold text-stone-900">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="px-2 py-1.5 text-stone-600 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Agrohandlers Green Add to Cart button */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
              justAdded
                ? 'bg-emerald-900 text-white'
                : 'bg-emerald-700 hover:bg-emerald-800 text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5 text-amber-300" />
                <span>ADD TO CART</span>
              </>
            )}
          </button>

          {/* Quick info */}
          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg border border-stone-200 cursor-pointer shrink-0"
            title="Produce info"
          >
            <Info className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
