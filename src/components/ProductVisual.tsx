import React, { useState } from 'react';
import { Product } from '../types/market';
import { FoodIllustration } from './FoodIllustrations';
import { Tag, MapPin } from 'lucide-react';

interface ProductVisualProps {
  product: Product;
  className?: string;
  isDetailed?: boolean;
}

export const ProductVisual: React.FC<ProductVisualProps> = ({
  product,
  className = 'h-56',
  isDetailed = false,
}) => {
  const [imageError, setImageError] = useState(false);

  // Determine reliable image URL
  const resolvedImageUrl = product.imageUrl || `/images/${product.imageCategory || 'peppers'}.jpg`;

  return (
    <div
      className={`relative w-full ${className} bg-stone-100 rounded-t-xl overflow-hidden flex flex-col items-center justify-center select-none group border-b border-stone-100`}
    >
      {/* Real, Bright, High-Definition Photograph */}
      {!imageError ? (
        <img
          src={resolvedImageUrl}
          alt={product.name}
          loading="eager"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out brightness-102 contrast-102"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-amber-50 to-emerald-50 flex items-center justify-center p-3">
          <FoodIllustration id={product.id} category={product.imageCategory} className="w-full h-full object-contain" />
        </div>
      )}

      {/* Subtle bottom gradient only behind kicker text for pure visual clarity */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* BOLD REAL PRICE BADGE OVERLAY (TOP-LEFT) */}
      <div className="absolute top-2.5 left-2.5 z-20 flex flex-col gap-1 shadow-md">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-900/95 text-white backdrop-blur-xs border border-amber-400/50 shadow-sm">
          <Tag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-mono font-black text-sm text-amber-300 tracking-tight tabular-nums">
            ₦{product.consumerOption.price.toLocaleString()}
          </span>
          <span className="text-[9px] uppercase tracking-wider font-bold text-stone-300">
            / Retail
          </span>
        </div>

        {product.retailerOption && (
          <div className="px-2 py-0.5 rounded-md bg-emerald-900/95 text-emerald-200 text-[10px] font-mono font-bold border border-emerald-500/40 shadow-xs self-start">
            Wholesale: ₦{product.retailerOption.price.toLocaleString()}
          </div>
        )}
      </div>

      {/* Quality Highlight Badge (TOP-RIGHT) */}
      {product.badge && (
        <div className="absolute top-2.5 right-2.5 z-20 text-[10px] font-black tracking-wider uppercase px-2.5 py-1 bg-amber-500 text-stone-950 rounded-md shadow-md border border-amber-300">
          {product.badge}
        </div>
      )}

      {product.isUserAdvertised && (
        <div className="absolute top-2.5 right-2.5 z-20 text-[10px] font-bold px-2 py-0.5 bg-emerald-700 text-white rounded-md shadow-md">
          Partner Ad
        </div>
      )}

      {/* Origin Kicker (BOTTOM-LEFT) */}
      <div className="absolute bottom-2 left-2.5 z-20 flex items-center gap-1 text-[11px] font-semibold text-white drop-shadow">
        <MapPin className="w-3 h-3 text-emerald-300 shrink-0" />
        <span className="bg-stone-900/75 backdrop-blur-xs px-1.5 py-0.5 rounded text-[10px] font-medium text-stone-100 border border-white/10 truncate max-w-[170px]">
          {product.origin}
        </span>
      </div>

      {/* Freshness Rating (BOTTOM-RIGHT) */}
      <div className="absolute bottom-2 right-2.5 z-20 text-[10px] font-mono font-bold text-emerald-300 bg-stone-900/80 backdrop-blur-xs px-1.5 py-0.5 rounded border border-emerald-500/30 shadow-xs">
        {product.freshnessScore}% Fresh
      </div>
    </div>
  );
};
