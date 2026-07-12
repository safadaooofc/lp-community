export type CategoryId = 'itens' | 'dinheiro' | 'up-de-conta' | 'servicos' | 'promocoes';

export type ProductType = 'standard' | 'calculator-money' | 'calculator-qty';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  type: ProductType;
  minQty?: number;
  maxQty?: number;
  pricePerMillion?: number;
  pricePerUnit?: number;
  deliveryTime: string;
  warranty: string;
  popular?: boolean;
}

export interface CategoryItem {
  id: CategoryId;
  name: string;
  description: string;
  iconName: string; // Lucide icon identifier
  count: number;
}

export interface Testimonial {
  id: string;
  author: string;
  platform: 'PC' | 'PS5' | 'Xbox';
  date: string;
  rating: number;
  comment: string;
  verifiedPurchase: boolean;
  productBought: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  customValue?: number; // Ex: milhões de GTA$ contratados
  calculatedPrice: number;
}

export interface FilterState {
  search: string;
  category: CategoryId | 'all';
  sortBy: 'relevance' | 'price-asc' | 'price-desc' | 'popular';
}
