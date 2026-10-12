export type Category = 
  | 'all'
  | 'peppers_vegetables'
  | 'tubers'
  | 'grains'
  | 'oils_fats'
  | 'proteins_seafood'
  | 'spices_seasonings'
  | 'pasta_packaged'
  | 'drinks_beverages'
  | 'frozen_foods'
  | 'hampers'
  | 'packaged_staples';

export type TargetAudience = 'both' | 'retailers' | 'consumers';

export interface ProductUnitOption {
  type: 'consumer' | 'retailer';
  label: string; // e.g. "Paint Bucket (4kg)" or "50kg Woven Sack"
  price: number; // in NGN
  moq: number; // minimum order quantity
  unitDescription: string;
  wholesaleSavingsPercent?: number;
}

export interface Product {
  id: string;
  name: string;
  localName?: string; // e.g. "Tatashe & Rodo", "Garri Ijebu", "Abakaliki Yam"
  category: Category;
  description: string;
  origin: string; // e.g. "Benue Farm Gate", "Mile 12 Market Direct", "Ondo Plantations"
  storageAdvice: string;
  audience: TargetAudience;
  imageUrl?: string;
  imageCategory: 'tuber' | 'grain' | 'pepper' | 'oil' | 'protein' | 'spice' | 'staple';
  badge?: string; // e.g. "Fresh Today", "High Demand", "Bumper Harvest"
  inStock: boolean;
  freshnessScore: number; // out of 100
  consumerOption: ProductUnitOption;
  retailerOption: ProductUnitOption;
  seller: {
    name: string;
    type: 'Morenike Direct' | 'Verified Partner Farm' | 'Wholesale Aggregator';
    phone?: string;
    verified: boolean;
  };
  isUserAdvertised?: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  selectedTier: 'consumer' | 'retailer';
  unitLabel: string;
  unitPrice: number;
  quantity: number;
}

export interface DeliveryZone {
  id: string;
  name: string;
  description: string;
  fee: number;
  estimatedDelivery: string;
}

export interface MarketPriceTrend {
  commodity: string;
  unit: string;
  marketLocation: string;
  currentPrice: number;
  previousPrice: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryAddress: string;
  deliveryZone: DeliveryZone;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  handlingFee: number;
  packagingFee: number;
  deliveryFee: number;
  total: number;
  paymentMethod: 'bank_transfer' | 'cash_on_delivery' | 'whatsapp_dispatch';
  orderDate: string;
  status: 'confirmed' | 'processing' | 'dispatched';
}
