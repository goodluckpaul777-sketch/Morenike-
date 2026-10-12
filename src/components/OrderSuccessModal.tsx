import React from 'react';
import { OrderDetails } from '../types/market';
import { CheckCircle2, MessageCircle, Download, ArrowRight, Building, Truck, Clock } from 'lucide-react';

interface OrderSuccessModalProps {
  order: OrderDetails | null;
  onClose: () => void;
  onBackToMarket: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  order,
  onClose,
  onBackToMarket,
}) => {
  if (!order) return null;

  const handleWhatsAppShare = () => {
    let msg = `*ORDER RECEIPT #${order.orderId} - SHOP WITH MORENIKE*\n\n`;
    msg += `Customer: ${order.customerName}\n`;
    msg += `Phone: ${order.customerPhone}\n`;
    msg += `Delivery Hub: ${order.deliveryZone.name}\n`;
    msg += `Address: ${order.deliveryAddress}\n\n`;
    msg += `*Items Ordered:*\n`;
    order.items.forEach((item, i) => {
      msg += `${i + 1}. ${item.product.name} (${item.unitLabel}) x${item.quantity} = ₦${(item.unitPrice * item.quantity).toLocaleString()}\n`;
    });
    msg += `\n*Total Amount:* ₦${order.total.toLocaleString()}\n`;
    msg += `Payment: ${order.paymentMethod === 'bank_transfer' ? 'Direct Bank Transfer' : 'Pay on Delivery'}\n`;
    window.open(`https://wa.me/2348030000000?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Header */}
        <div className="p-6 bg-emerald-800 text-white text-center">
          <CheckCircle2 className="w-14 h-14 mx-auto text-emerald-200 mb-2" />
          <h2 className="text-xl font-bold tracking-tight">Order Confirmed!</h2>
          <div className="text-xs font-mono text-emerald-100 mt-1">
            Order Reference: {order.orderId}
          </div>
          <p className="text-xs text-emerald-100/90 mt-2">
            Your produce is being scheduled for farm inspection and bagging.
          </p>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs text-stone-700">
          {/* Bank Transfer Instructions if chosen */}
          {order.paymentMethod === 'bank_transfer' && (
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-stone-800">
              <div className="font-bold text-amber-900 mb-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-amber-800" />
                Bank Transfer Details for Shop with Morenike
              </div>
              <div className="space-y-1 font-mono text-xs mt-2 text-stone-800">
                <div><span className="text-stone-500 font-sans">Bank:</span> Moniepoint Microfinance / GTBank</div>
                <div><span className="text-stone-500 font-sans">Account Name:</span> MORENIKE COMMODITIES TRADING</div>
                <div><span className="text-stone-500 font-sans">Account Number:</span> <strong className="text-stone-900">8234918201</strong></div>
                <div><span className="text-stone-500 font-sans">Amount:</span> <strong className="text-amber-900">₦{order.total.toLocaleString()}</strong></div>
                <div><span className="text-stone-500 font-sans">Reference:</span> {order.orderId}</div>
              </div>
              <p className="text-[11px] text-amber-950/80 mt-2">
                Kindly send payment receipt or screenshot to dispatch on WhatsApp for instant priority loading.
              </p>
            </div>
          )}

          {/* Delivery & Schedule */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-stone-900">
              <Truck className="w-4 h-4 text-amber-700" />
              <span>Dispatch Logistics</span>
            </div>
            <div><span className="text-stone-500">Destination:</span> {order.deliveryZone.name}</div>
            <div><span className="text-stone-500">Address:</span> {order.deliveryAddress}</div>
            <div className="flex items-center gap-1 text-emerald-800 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>Est. Delivery: {order.deliveryZone.estimatedDelivery}</span>
            </div>
          </div>

          {/* Itemized Order Slip */}
          <div className="border border-stone-200 rounded-xl overflow-hidden">
            <div className="bg-stone-100 p-2.5 font-bold text-stone-800 text-[11px] uppercase tracking-wider flex justify-between">
              <span>Ordered Items ({order.items.length})</span>
              <span>Total</span>
            </div>
            <div className="divide-y divide-stone-100 max-h-40 overflow-y-auto">
              {order.items.map((item, idx) => (
                <div key={idx} className="p-2.5 flex justify-between items-center text-[11px]">
                  <div>
                    <span className="font-semibold text-stone-900">{item.product.name}</span>
                    <div className="text-stone-500">{item.unitLabel} × {item.quantity}</div>
                  </div>
                  <div className="font-mono font-bold text-stone-900">
                    ₦{(item.unitPrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-stone-50 p-2.5 border-t border-stone-200 flex justify-between font-bold text-stone-900">
              <span>Total Paid / Due</span>
              <span className="font-mono text-sm text-amber-900">₦{order.total.toLocaleString()}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleWhatsAppShare}
              className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Forward Receipt via WhatsApp Dispatch</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBackToMarket();
              }}
              className="w-full py-2 px-4 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Back to Marketplace</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
