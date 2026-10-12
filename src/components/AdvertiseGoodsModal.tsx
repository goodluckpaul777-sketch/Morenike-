import React, { useState } from 'react';
import { Product, Category, TargetAudience } from '../types/market';
import { X, PlusCircle, CheckCircle, Store, Sparkles, MapPin, Phone, ShieldCheck } from 'lucide-react';

interface AdvertiseGoodsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

export const AdvertiseGoodsModal: React.FC<AdvertiseGoodsModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [productName, setProductName] = useState('');
  const [localName, setLocalName] = useState('');
  const [category, setCategory] = useState<Category>('peppers_vegetables');
  const [audience, setAudience] = useState<TargetAudience>('both');
  const [description, setDescription] = useState('');
  const [origin, setOrigin] = useState('');
  const [storageAdvice, setStorageAdvice] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerPhone, setSellerPhone] = useState('');

  // Consumer unit
  const [consumerLabel, setConsumerLabel] = useState('1 Paint Bucket (approx. 4.5kg)');
  const [consumerPrice, setConsumerPrice] = useState<number>(7500);

  // Retailer unit
  const [retailerLabel, setRetailerLabel] = useState('50kg Woven Sack / Farm Crate');
  const [retailerPrice, setRetailerPrice] = useState<number>(65000);
  const [wholesaleSavings, setWholesaleSavings] = useState<number>(15);

  const [imageCategory, setImageCategory] = useState<'tuber' | 'grain' | 'pepper' | 'oil' | 'protein' | 'spice' | 'staple'>('pepper');
  const [badgeText, setBadgeText] = useState('Direct Farm Harvest');
  const [successMessage, setSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!productName.trim() || !sellerName.trim() || !consumerPrice || !retailerPrice) {
      return;
    }

    const newProduct: Product = {
      id: `ad-${Date.now()}`,
      name: productName.trim(),
      localName: localName.trim() || productName.trim(),
      category,
      audience,
      description: description.trim() || 'Fresh authentic farm produce advertised directly from verified local market traders for retailers and consumers.',
      origin: origin.trim() || 'Local Market Aggregator Hub',
      storageAdvice: storageAdvice.trim() || 'Keep in well-aerated cool room away from direct moisture.',
      imageCategory,
      imageUrl: (() => {
        switch (imageCategory) {
          case 'pepper': return '/images/peppers.jpg';
          case 'tuber': return '/images/yam.jpg';
          case 'oil': return '/images/palm_oil.jpg';
          case 'grain': return '/images/garri.jpg';
          case 'protein': return '/images/smoked_fish.jpg';
          case 'spice': return '/images/spices.jpg';
          default: return '/images/peppers.jpg';
        }
      })(),
      badge: badgeText.trim() || 'Vendor Listed',
      inStock: true,
      freshnessScore: 97,
      isUserAdvertised: true,
      consumerOption: {
        type: 'consumer',
        label: consumerLabel || 'Household Measure',
        price: Number(consumerPrice),
        moq: 1,
        unitDescription: 'Consumer household pack'
      },
      retailerOption: {
        type: 'retailer',
        label: retailerLabel || 'Wholesale Commercial Measure',
        price: Number(retailerPrice),
        moq: 1,
        unitDescription: 'Bulk tier for supermarkets, retailers and restaurants',
        wholesaleSavingsPercent: Number(wholesaleSavings) || 15
      },
      seller: {
        name: sellerName.trim(),
        type: 'Verified Partner Farm',
        phone: sellerPhone.trim(),
        verified: true
      }
    };

    onAddProduct(newProduct);
    setSuccessMessage(true);

    setTimeout(() => {
      setSuccessMessage(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold">Advertise Local Market Goods</h2>
              <p className="text-xs text-stone-300">
                Connect with bulk retailers and household consumers on Shop with Morenike
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successMessage ? (
          <div className="p-10 text-center flex flex-col items-center justify-center">
            <CheckCircle className="w-16 h-16 text-emerald-600 mb-3" />
            <h3 className="text-xl font-bold text-stone-900">Advertisement Published!</h3>
            <p className="text-sm text-stone-600 mt-2 max-w-md">
              Your produce has been verified and added to the Shop with Morenike marketplace. Retailers and consumers can now add it to their carts and place orders!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
            {/* Produce Basics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Product / Commodity Name *
                </label>
                <input
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g. Crisp Yellow Garri, Scotch Bonnet Pepper"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Local / Market Identifier
                </label>
                <input
                  type="text"
                  value={localName}
                  onChange={(e) => setLocalName(e.target.value)}
                  placeholder="e.g. Garri Bendel, Tatashe Oyingbo"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>
            </div>

            {/* Category & Audience */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Category *
                </label>
                <select
                  value={category}
                  onChange={(e) => {
                    const cat = e.target.value as Category;
                    setCategory(cat);
                    if (cat === 'tubers') setImageCategory('tuber');
                    else if (cat === 'grains') setImageCategory('grain');
                    else if (cat === 'peppers_vegetables') setImageCategory('pepper');
                    else if (cat === 'oils_fats') setImageCategory('oil');
                    else if (cat === 'proteins_seafood') setImageCategory('protein');
                    else if (cat === 'spices_seasonings') setImageCategory('spice');
                  }}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 bg-white"
                >
                  <option value="peppers_vegetables">Peppers & Vegetables</option>
                  <option value="tubers">Tubers & Roots</option>
                  <option value="grains">Grains & Flours</option>
                  <option value="oils_fats">Oils & Cooking Fats</option>
                  <option value="proteins_seafood">Proteins & Seafood</option>
                  <option value="spices_seasonings">Spices & Seasonings</option>
                  <option value="packaged_staples">Packaged Staples</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Target Buyers *
                </label>
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value as TargetAudience)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 bg-white"
                >
                  <option value="both">Both Retailers & Consumers</option>
                  <option value="retailers">Retailers / Wholesale Only</option>
                  <option value="consumers">Consumers / Households Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Commodity Visual Theme
                </label>
                <select
                  value={imageCategory}
                  onChange={(e) => setImageCategory(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 bg-white"
                >
                  <option value="pepper">Fresh Peppers / Veggies</option>
                  <option value="tuber">Tubers / Yam / Plantain</option>
                  <option value="grain">Grains / Rice / Garri</option>
                  <option value="oil">Palm Oil / Cooking Oil</option>
                  <option value="protein">Dried Fish / Crayfish</option>
                  <option value="spice">Indigenous Spices</option>
                </select>
              </div>
            </div>

            {/* Farm Origin & Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Farm Origin or Market Hub *
                </label>
                <input
                  type="text"
                  required
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="e.g. Mile 12 Market Direct / Benue Farm Gate"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Quality Highlight Badge
                </label>
                <input
                  type="text"
                  value={badgeText}
                  onChange={(e) => setBadgeText(e.target.value)}
                  placeholder="e.g. 100% Stone-Free, New Harvest, Organic"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>
            </div>

            {/* Dual Pricing Section: Consumer & Retailer */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
              <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Pricing & Unit Measures
              </div>

              {/* Consumer Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 pb-3 border-b border-stone-200">
                <div>
                  <label className="block text-[11px] font-semibold text-emerald-900 mb-1">
                    Consumer / Household Unit (e.g. Paint Bucket, 5kg)
                  </label>
                  <input
                    type="text"
                    value={consumerLabel}
                    onChange={(e) => setConsumerLabel(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-emerald-900 mb-1">
                    Consumer Unit Price (₦ Naira) *
                  </label>
                  <input
                    type="number"
                    required
                    min={100}
                    value={consumerPrice}
                    onChange={(e) => setConsumerPrice(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 text-xs font-mono border border-stone-300 rounded bg-white"
                  />
                </div>
              </div>

              {/* Retailer Wholesale Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-amber-900 mb-1">
                    Wholesale Bulk Unit (e.g. 50kg Sack, 25L Can)
                  </label>
                  <input
                    type="text"
                    value={retailerLabel}
                    onChange={(e) => setRetailerLabel(e.target.value)}
                    className="w-full px-2.5 py-1.5 text-xs border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-amber-900 mb-1">
                    Retailer Wholesale Price (₦ Naira) *
                  </label>
                  <input
                    type="number"
                    required
                    min={1000}
                    value={retailerPrice}
                    onChange={(e) => setRetailerPrice(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 text-xs font-mono border border-stone-300 rounded bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-amber-900 mb-1">
                    Wholesale Savings Discount (%)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={wholesaleSavings}
                    onChange={(e) => setWholesaleSavings(Number(e.target.value))}
                    className="w-full px-2.5 py-1.5 text-xs font-mono border border-stone-300 rounded bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Description & Storage Advice */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Produce Description
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe freshness, taste, grain size, or harvest quality..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Storage & Preservation Instructions
                </label>
                <textarea
                  rows={2}
                  value={storageAdvice}
                  onChange={(e) => setStorageAdvice(e.target.value)}
                  placeholder="How should buyers store it to prevent pest infestation or rot?"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>
            </div>

            {/* Seller Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200">
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Seller / Farm / Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  placeholder="e.g. Mama Bisi Wholesale Stall, Agro Alliance"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-1">
                  Seller Contact / WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={sellerPhone}
                  onChange={(e) => setSellerPhone(e.target.value)}
                  placeholder="e.g. +234 803 123 4567"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Publish Goods Advertisement</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
