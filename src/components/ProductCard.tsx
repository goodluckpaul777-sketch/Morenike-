import React, { useState } from 'react';
import { Product } from '../types/market';
import { ProductVisual } from './ProductVisual';
import { Plus, Minus, ShoppingBag, Check, Info } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, tier: 'consumer' | 'retailer', quantity: number) => void;
  onOpenDetails: (product: Product) => void;
  preferredTier?: 'consumer' | 'retailer';
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetails,
  preferredTier = 'consumer'
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
    <article className="group bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden">
      <div>
        {/* Visual Hero Container */}
        <div className="cursor-pointer" onClick={() => onOpenDetails(product)}>
          <ProductVisual product={product} className="h-56" />
        </div>

        {/* Card Content */}
        <div className="p-4">
          {/* Unboxed Metadata (Zero-pill discipline) */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5 font-medium">
            <span className="uppercase tracking-wider text-[11px] text-amber-900 font-semibold">
              {product.category.replace('_', ' ')}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{product.origin}</span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onOpenDetails(product)}
            className="text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>
          {product.localName && (
            <p className="text-xs text-stone-500 font-medium mt-0.5 line-clamp-1 italic">
              {product.localName}
            </p>
          )}

          <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Dual Unit Tier Selector - Split in two dedicated interactive rows */}
          <div className="mt-4 pt-3 border-t border-stone-100">
            <div className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-2">
              Choose Package Option:
            </div>

            <div className="space-y-1.5">
              {/* Row 1: Consumer Household Tier */}
              <button
                type="button"
                onClick={() => setSelectedTier('consumer')}
                className={`w-full p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  selectedTier === 'consumer'
                    ? 'border-emerald-700 bg-emerald-50/50 ring-1 ring-emerald-700/20'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                      selectedTier === 'consumer' ? 'bg-emerald-700 text-white' : 'bg-stone-100 text-stone-700'
                    }`}>
                      Household
                    </span>
                    <span className="text-xs font-semibold text-stone-900 truncate">
                      {product.consumerOption.label}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold font-mono text-stone-900 tabular-nums">
                    ₦{product.consumerOption.price.toLocaleString()}
                  </div>
                </div>
              </button>

              {/* Row 2: Retailer Wholesale Bulk Tier */}
              <button
                type="button"
                onClick={() => setSelectedTier('retailer')}
                className={`w-full p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-center justify-between gap-2 ${
                  selectedTier === 'retailer'
                    ? 'border-amber-800 bg-amber-50/60 ring-1 ring-amber-800/30'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded ${
                      selectedTier === 'retailer' ? 'bg-amber-800 text-white' : 'bg-stone-100 text-stone-700'
                    }`}>
                      Wholesale
                    </span>
                    <span className="text-xs font-semibold text-stone-900 truncate">
                      {product.retailerOption.label}
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold font-mono text-amber-900 tabular-nums">
                    ₦{product.retailerOption.price.toLocaleString()}
                  </div>
                  {product.retailerOption.wholesaleSavingsPercent && (
                    <div className="text-[10px] font-semibold text-emerald-700">
                      Save {product.retailerOption.wholesaleSavingsPercent}%
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Active Price Display Box */}
            <div className="mt-2.5 p-2 bg-stone-100/80 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-stone-500 block">Active Price:</span>
                <span className="text-lg font-black font-mono text-emerald-950 tabular-nums">
                  ₦{activeOption.price.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-stone-500 block font-medium">Selected Tier:</span>
                <span className="text-xs font-bold text-stone-800">
                  {selectedTier === 'retailer' ? 'Wholesale Bulk' : 'Household Pack'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0">
        <div className="flex items-center gap-2">
          {/* Stepper */}
          <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shrink-0">
            <button
              type="button"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-xs font-mono font-bold text-stone-900 tabular-nums">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-stone-500 hover:bg-stone-100 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer ${
              justAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-stone-900 hover:bg-stone-800 text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>Add to Cart</span>
              </>
            )}
          </button>

          {/* Details trigger */}
          <button
            type="button"
            onClick={() => onOpenDetails(product)}
            className="p-2 text-stone-500 hover:text-stone-900 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
            title="View specifications & storage guide"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        {/* Vendor attribution footer */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-stone-500">
          <span>Seller: {product.seller.name}</span>
          {product.seller.verified && (
            <span className="text-emerald-700 font-medium">✓ Verified Source</span>
          )}
        </div>
      </div>
    </article>
  );
};
