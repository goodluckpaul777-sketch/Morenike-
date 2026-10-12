import React, { useState } from 'react';
import { CartItem, DeliveryZone } from '../types/market';
import { DELIVERY_ZONES } from '../data/mockProducts';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, Truck, ShieldCheck, MessageCircle, CreditCard, ChevronRight } from 'lucide-react';
import { FoodIllustration } from './FoodIllustrations';

interface CartViewProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, tier: 'consumer' | 'retailer', quantity: number) => void;
  onRemoveItem: (productId: string, tier: 'consumer' | 'retailer') => void;
  onClearCart: () => void;
  onBackToMarket: () => void;
  onProceedToCheckout: (deliveryZone: DeliveryZone) => void;
}

export const CartView: React.FC<CartViewProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onBackToMarket,
  onProceedToCheckout,
}) => {
  const [selectedZone, setSelectedZone] = useState<DeliveryZone>(DELIVERY_ZONES[0]);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  
  // Packaging fee (₦500 per consumer item, ₦1500 per wholesale bag/crate)
  const packagingFee = items.reduce((sum, item) => {
    return sum + (item.selectedTier === 'retailer' ? 1500 : 500) * item.quantity;
  }, 0);

  const deliveryFee = selectedZone.fee;
  const grandTotal = subtotal + (items.length > 0 ? packagingFee : 0) + (items.length > 0 ? deliveryFee : 0);

  // Generate WhatsApp order message (similar to Agrohandlers order link)
  const generateWhatsAppOrderText = () => {
    let text = `*NEW ORDER - SHOP WITH MORENIKE*\n\n`;
    text += `*Ordered Items:*\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.name} (${item.unitLabel})\n`;
      text += `   Qty: ${item.quantity} x ₦${item.unitPrice.toLocaleString()} = ₦${(item.unitPrice * item.quantity).toLocaleString()}\n`;
    });
    text += `\n*Subtotal:* ₦${subtotal.toLocaleString()}\n`;
    text += `*Packaging & Heavy Sacks:* ₦${packagingFee.toLocaleString()}\n`;
    text += `*Delivery Hub:* ${selectedZone.name} (₦${deliveryFee.toLocaleString()})\n`;
    text += `*GRAND TOTAL:* ₦${grandTotal.toLocaleString()}\n\n`;
    text += `Please confirm availability and dispatch schedule.`;
    return text;
  };

  const handleWhatsAppDispatch = () => {
    const text = generateWhatsAppOrderText();
    const encoded = encodeURIComponent(text);
    // WhatsApp direct link with formatted order
    window.open(`https://wa.me/2348030000000?text=${encoded}`, '_blank');
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900">Your Market Cart is Empty</h2>
        <p className="text-sm text-stone-600 mt-2 max-w-md mx-auto">
          You have not added any local market foodstuffs yet. Browse fresh peppers, yam tubers, grains, and palm oil to get started.
        </p>
        <button
          onClick={onBackToMarket}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold rounded-lg shadow-sm cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Local Market Catalog</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top back & title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <button
            onClick={onBackToMarket}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900 mb-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Continue Shopping</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Shopping Cart & Logistics
          </h1>
          <p className="text-xs text-stone-500 mt-1">
            Review your local market selection for both wholesale supply and household cooking.
          </p>
        </div>

        <button
          onClick={onClearCart}
          className="text-xs text-rose-700 hover:text-rose-900 font-medium self-start sm:self-auto cursor-pointer"
        >
          Clear All Items
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Itemized Produce Table */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-stone-200 shadow-2xs overflow-hidden">
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs font-semibold text-stone-700">
            <span>Market Produce ({items.length} unique items)</span>
            <span>Net Price (₦)</span>
          </div>

          <div className="divide-y divide-stone-100">
            {items.map((item) => {
              const lineTotal = item.unitPrice * item.quantity;
              return (
                <div key={`${item.productId}-${item.selectedTier}`} className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-18 h-18 rounded-xl bg-stone-100 border border-stone-200 shrink-0 relative overflow-hidden shadow-2xs">
                      <img
                        src={item.product.imageUrl || `/images/${item.product.imageCategory || 'peppers'}.jpg`}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className={`absolute bottom-0 inset-x-0 text-center text-[9px] font-mono font-bold py-0.5 ${
                        item.selectedTier === 'retailer' ? 'bg-amber-800 text-white' : 'bg-emerald-800 text-white'
                      }`}>
                        {item.selectedTier === 'retailer' ? 'BULK' : 'RETAIL'}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-stone-500 uppercase tracking-wide">
                          {item.product.category.replace('_', ' ')}
                        </span>
                        <span aria-hidden="true" className="text-stone-300">·</span>
                        <span className="text-xs text-stone-500 truncate">{item.product.origin}</span>
                      </div>

                      <h4 className="text-sm font-bold text-stone-900 mt-0.5">
                        {item.product.name}
                      </h4>
                      
                      <div className="text-xs font-medium text-amber-800 mt-0.5">
                        {item.unitLabel}
                      </div>

                      <div className="mt-1 text-xs text-stone-500 font-mono tabular-nums">
                        ₦{item.unitPrice.toLocaleString()} each
                      </div>
                    </div>
                  </div>

                  {/* Quantity Stepper & Line Total */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                    <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.productId, item.selectedTier, item.quantity - 1)}
                        className="p-1.5 text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-mono font-bold text-stone-900 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.productId, item.selectedTier, item.quantity + 1)}
                        className="p-1.5 text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[90px]">
                      <div className="text-sm font-bold font-mono text-stone-900 tabular-nums">
                        ₦{lineTotal.toLocaleString()}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.productId, item.selectedTier)}
                      className="p-1.5 text-stone-400 hover:text-rose-700 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Delivery Location & Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          {/* Delivery Zone Selector */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
              <Truck className="w-4 h-4 text-amber-700" />
              <span>Select Destination Hub</span>
            </div>

            <div className="space-y-2">
              {DELIVERY_ZONES.map((zone) => (
                <label
                  key={zone.id}
                  className={`block p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    selectedZone.id === zone.id
                      ? 'border-amber-800 bg-amber-50/50 ring-1 ring-amber-800/20'
                      : 'border-stone-200 hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="delivery_zone"
                        checked={selectedZone.id === zone.id}
                        onChange={() => setSelectedZone(zone)}
                        className="text-amber-800 focus:ring-amber-700"
                      />
                      <span className="font-semibold text-stone-900">{zone.name}</span>
                    </div>
                    <span className="font-mono font-bold text-stone-900 shrink-0">
                      {zone.fee === 0 ? 'FREE' : `₦${zone.fee.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="mt-1 text-[11px] text-stone-500 pl-5">
                    {zone.description} · <span className="text-emerald-700 font-medium">{zone.estimatedDelivery}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Cost Summary Box */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-5 shadow-md border border-stone-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-3 border-b border-stone-800">
              Order Breakdown
            </h3>

            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono tabular-nums text-white">₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-1">
                  Packaging, Crates & Heavy Sacks
                </span>
                <span className="font-mono tabular-nums text-white">₦{packagingFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Logistics / Haulage Fee</span>
                <span className="font-mono tabular-nums text-white">
                  {deliveryFee === 0 ? '₦0 (Self-Pickup)' : `₦${deliveryFee.toLocaleString()}`}
                </span>
              </div>

              <div className="pt-3 border-t border-stone-800 flex justify-between items-baseline text-sm font-bold text-white">
                <span>Total Amount</span>
                <span className="text-lg font-mono text-amber-300 tabular-nums">
                  ₦{grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons (Dual Pathways) */}
            <div className="mt-6 space-y-2.5">
              <button
                type="button"
                onClick={() => onProceedToCheckout(selectedZone)}
                className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                <span>Proceed to Checkout</span>
                <ChevronRight className="w-4 h-4 ml-auto" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDispatch}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                title="Send exact itemized bill directly to Morenike dispatch officer via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{copiedWhatsApp ? 'Opening WhatsApp...' : 'Order via WhatsApp Dispatch'}</span>
              </button>
            </div>

            <div className="mt-4 pt-4 border-t border-stone-800 text-[11px] text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Goods inspected before loading. Returns accepted upon delivery if produce fails grade.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
