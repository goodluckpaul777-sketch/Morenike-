import React, { useState } from 'react';
import { CartItem, DeliveryZone, OrderDetails } from '../types/market';
import { X, ShieldCheck, Check, ArrowRight, Building2, Banknote, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  deliveryZone: DeliveryZone;
  onOrderSuccess: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  deliveryZone,
  onOrderSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash_on_delivery'>('bank_transfer');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const packagingFee = items.reduce((sum, item) => {
    return sum + (item.selectedTier === 'retailer' ? 1500 : 500) * item.quantity;
  }, 0);
  const deliveryFee = deliveryZone.fee;
  const total = subtotal + packagingFee + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const order: OrderDetails = {
        orderId: `SWM-${Math.floor(100000 + Math.random() * 900000)}`,
        customerName,
        customerPhone,
        customerEmail: customerEmail || 'N/A',
        deliveryAddress,
        deliveryZone,
        notes,
        items: [...items],
        subtotal,
        handlingFee: packagingFee,
        packagingFee,
        deliveryFee,
        total,
        paymentMethod,
        orderDate: new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'confirmed'
      };

      setIsSubmitting(false);
      onOrderSuccess(order);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-stone-900 text-white flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold">Complete Food Market Order</h2>
            <p className="text-xs text-stone-300">
              Direct dispatch from Shop with Morenike local hubs
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[82vh] overflow-y-auto">
          {/* Customer Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Full Name / Business Name *
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Morenikeji Adebayo / Taste Kitchens"
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-800 mb-1">
                Phone Number (WhatsApp Active) *
              </label>
              <input
                type="tel"
                required
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 0802 345 6789"
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-800 mb-1">
              Email Address (Optional for e-receipt)
            </label>
            <input
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="e.g. orders@restaurant.com"
              className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
            />
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-semibold text-stone-800 mb-1">
              Exact Delivery Street Address & Landmarks *
            </label>
            <textarea
              required
              rows={2}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="House/Shop Number, Street Name, Closest Bus Stop or Market Gate..."
              className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
            />
          </div>

          {/* Selected Zone Pill info */}
          <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900 flex items-center justify-between">
            <div>
              <div className="font-bold">Destination Hub: {deliveryZone.name}</div>
              <div className="text-[11px] text-amber-800 mt-0.5">
                Delivery: ₦{deliveryZone.fee.toLocaleString()} ({deliveryZone.estimatedDelivery})
              </div>
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label className="block text-xs font-semibold text-stone-800 mb-1">
              Special Handling Instructions (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., Deliver before 11am; blend peppers coarsely; double sack the garri."
              className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
            />
          </div>

          {/* Payment Method */}
          <div className="pt-2">
            <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              Payment Method
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label
                className={`p-3 rounded-xl border text-xs cursor-pointer flex flex-col justify-between transition-all ${
                  paymentMethod === 'bank_transfer'
                    ? 'border-amber-800 bg-amber-50/50 ring-1 ring-amber-800/30'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={() => setPaymentMethod('bank_transfer')}
                  />
                  <span className="font-bold text-stone-900">Direct Bank Transfer</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 pl-5">
                  Instant invoice with Morenike Central Agro accounts
                </p>
              </label>

              <label
                className={`p-3 rounded-xl border text-xs cursor-pointer flex flex-col justify-between transition-all ${
                  paymentMethod === 'cash_on_delivery'
                    ? 'border-amber-800 bg-amber-50/50 ring-1 ring-amber-800/30'
                    : 'border-stone-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cash_on_delivery'}
                    onChange={() => setPaymentMethod('cash_on_delivery')}
                  />
                  <span className="font-bold text-stone-900">Pay on Delivery</span>
                </div>
                <p className="text-[11px] text-stone-500 mt-1 pl-5">
                  Available for verified dispatch zones in Lagos & Ibadan
                </p>
              </label>
            </div>
          </div>

          {/* Amount Due */}
          <div className="p-3 bg-stone-100 rounded-xl flex items-center justify-between text-xs font-semibold text-stone-800">
            <span>Total Payable Amount:</span>
            <span className="text-base font-bold font-mono text-stone-900 tabular-nums">
              ₦{total.toLocaleString()}
            </span>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-700 hover:bg-stone-100 rounded-lg cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-xs font-bold text-white bg-amber-800 hover:bg-amber-900 disabled:opacity-50 rounded-lg shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              {isSubmitting ? (
                <span>Generating Order Slip...</span>
              ) : (
                <>
                  <span>Confirm Order</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
