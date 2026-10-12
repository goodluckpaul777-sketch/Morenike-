import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck } from 'lucide-react';

interface TopBarProps {
  onOpenAdvertiseModal: () => void;
  onOpenTrackOrder: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenAdvertiseModal,
  onOpenTrackOrder,
}) => {
  return (
    <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 border-b border-emerald-950/60 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-5">
          <a
            href="tel:09028106224"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Hotline: <strong>09028106224</strong></span>
          </a>
          <a
            href="https://wa.me/2349028106224"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors text-emerald-200"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Dispatch</span>
          </a>
          <div className="flex items-center gap-1.5 text-emerald-300">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Delivering across Lagos, Ogun & Nationwide Inter-State</span>
          </div>
        </div>

        {/* Right: Seller link & Utilities */}
        <div className="flex items-center gap-4 text-emerald-200">
          <button
            onClick={onOpenAdvertiseModal}
            className="text-amber-300 font-semibold hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Sell on Morenike (Advertise Produce)</span>
          </button>
          <span className="text-emerald-700">|</span>
          <button
            onClick={onOpenTrackOrder}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Track Order
          </button>
          <span className="text-emerald-700">|</span>
          <span className="font-semibold text-white">Currency: ₦ (NGN)</span>
        </div>
      </div>
    </div>
  );
};
