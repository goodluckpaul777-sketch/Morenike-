import React, { useState } from 'react';
import { Product } from '../types/market';
import { ProductVisual } from './ProductVisual';
import { X, ShoppingBag, Check, ShieldCheck, MapPin, Truck, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, tier: 'consumer' | 'retailer', quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [tier, setTier] = useState<'consumer' | 'retailer'>('consumer');
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return null;

  const currentOption = tier === 'consumer' ? product.consumerOption : product.retailerOption;

  const handleAdd = () => {
    onAddToCart(product, tier, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-stone-100 text-stone-700 hover:text-stone-900 border border-stone-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Visual */}
        <div className="w-full">
          <ProductVisual product={product} className="h-60" isDetailed={true} />
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider text-amber-900 font-semibold">
              {product.category.replace('_', ' ')}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              {product.origin}
            </span>
            <span aria-hidden="true">·</span>
            <span>Batch Tested 100% Quality</span>
          </div>

          <h2 className="text-2xl font-bold text-stone-900 mt-1">
            {product.name}
          </h2>
          {product.localName && (
            <div className="text-sm text-stone-500 font-medium italic mt-0.5">
              Market Label: {product.localName}
            </div>
          )}

          <p className="mt-3 text-sm text-stone-700 leading-relaxed">
            {product.description}
          </p>

          {/* Storage & Handling Guide */}
          <div className="mt-4 p-3.5 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-stone-700">
            <div className="font-semibold text-stone-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Market Handler Storage Advice
            </div>
            <p>{product.storageAdvice}</p>
          </div>

          {/* Tier Selection */}
          <div className="mt-5">
            <div className="text-xs font-semibold text-stone-800 uppercase tracking-wider mb-2">
              Select Package Tier:
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Consumer card */}
              <button
                type="button"
                onClick={() => setTier('consumer')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  tier === 'consumer'
                    ? 'border-amber-800 bg-amber-50/40 ring-2 ring-amber-800/20'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="text-xs font-bold text-stone-900">Household Pack</div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  {product.consumerOption.label}
                </div>
                <div className="text-lg font-bold font-mono text-stone-900 mt-2 tabular-nums">
                  ₦{product.consumerOption.price.toLocaleString()}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {product.consumerOption.unitDescription}
                </div>
              </button>

              {/* Retailer wholesale card */}
              <button
                type="button"
                onClick={() => setTier('retailer')}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                  tier === 'retailer'
                    ? 'border-amber-800 bg-amber-50/40 ring-2 ring-amber-800/20'
                    : 'border-stone-200 hover:border-stone-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-900">Wholesale Bulk</span>
                  {product.retailerOption.wholesaleSavingsPercent && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                      -{product.retailerOption.wholesaleSavingsPercent}% Margin
                    </span>
                  )}
                </div>
                <div className="text-sm font-semibold text-stone-800 mt-1">
                  {product.retailerOption.label}
                </div>
                <div className="text-lg font-bold font-mono text-stone-900 mt-2 tabular-nums">
                  ₦{product.retailerOption.price.toLocaleString()}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">
                  {product.retailerOption.unitDescription}
                </div>
              </button>
            </div>
          </div>

          {/* Quantity & Buy Bar */}
          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-4">
            <div className="flex items-center border border-stone-300 rounded-lg bg-stone-50">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-stone-600 hover:bg-stone-200 transition-colors rounded-l-lg cursor-pointer"
              >
                -
              </button>
              <span className="px-3 font-mono font-bold text-sm text-stone-900 tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-stone-600 hover:bg-stone-200 transition-colors rounded-r-lg cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="flex-1">
              <div className="text-xs text-stone-500">Subtotal</div>
              <div className="text-lg font-bold font-mono text-stone-900 tabular-nums">
                ₦{(currentOption.price * quantity).toLocaleString()}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`px-6 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>Add to Order</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
