import React, { useState } from 'react';
import { Product } from '../types/market';
import { FoodIllustration } from './FoodIllustrations';
import { Tag, Sparkles } from 'lucide-react';

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
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative w-full ${className} bg-stone-900 rounded-t-xl overflow-hidden flex flex-col items-center justify-center select-none group`}
    >
      {/* Real Photograph with fallback to high-fidelity SVG illustration */}
      {product.imageUrl && !imageError ? (
        <>
          <img
            src={product.imageUrl}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover group-hover:scale-108 transition-all duration-500 ease-out ${
              imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          {/* Subtle bottom dark gradient scrim so photo and typography contrast is high */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20 pointer-events-none"></div>

          {/* Loading placeholder while photo streams */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100">
              <FoodIllustration id={product.id} category={product.imageCategory} className="w-full h-full p-4" />
            </div>
          )}
        </>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center p-3">
          <FoodIllustration id={product.id} category={product.imageCategory} className="w-full h-full object-contain" />
        </div>
      )}

      {/* BOLD REAL PRICE BADGE OVERLAY (TOP-LEFT) */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1.5 drop-shadow-md">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-950/90 text-white backdrop-blur-md border border-amber-500/40 shadow-sm">
          <Tag className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono font-black text-sm text-amber-300 tabular-nums">
            ₦{product.consumerOption.price.toLocaleString()}
          </span>
          <span className="text-[10px] text-stone-300 uppercase font-semibold">/ Retail</span>
        </div>

        {product.retailerOption && (
          <div className="px-2.5 py-0.5 rounded-md bg-emerald-950/90 text-emerald-200 text-[11px] font-mono font-bold backdrop-blur-md border border-emerald-600/40 self-start shadow-sm">
            Wholesale: ₦{product.retailerOption.price.toLocaleString()}
          </div>
        )}
      </div>

      {/* Quality Highlight Badge (TOP-RIGHT) */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-20 text-[10px] font-black tracking-wide uppercase px-2.5 py-1 bg-amber-500 text-stone-950 rounded-md shadow-md border border-amber-300">
          {product.badge}
        </div>
      )}

      {product.isUserAdvertised && (
        <div className="absolute top-3 right-3 z-20 text-[10px] font-bold px-2.5 py-1 bg-emerald-700 text-white rounded-md shadow-md">
          Partner Ad
        </div>
      )}

      {/* Origin Kicker (BOTTOM-LEFT) */}
      <div className="absolute bottom-2.5 left-3 z-20 flex items-center gap-1.5 text-[11px] font-semibold text-white drop-shadow-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="bg-stone-950/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/20">
          {product.origin}
        </span>
      </div>

      {/* Freshness Rating (BOTTOM-RIGHT) */}
      <div className="absolute bottom-2.5 right-3 z-20 text-[10px] font-mono font-bold text-emerald-300 bg-stone-950/80 backdrop-blur-xs px-2 py-0.5 rounded border border-emerald-500/40">
        {product.freshnessScore}% Fresh
      </div>
    </div>
  );
};
