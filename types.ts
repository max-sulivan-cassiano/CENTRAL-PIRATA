export interface SaleItem {
  id: string;
  name: string;
  originalPrice: number;
  currency: 'PYG' | 'USD' | 'BRL';
  salePrice: number;
  taxPaid?: number;
  tripShare: number;
  convertedPriceBRL: number;
  finalCostBRL: number;
  profitBRL: number;
  status: 'pending' | 'sold' | 'shipped';
}

export interface Investment {
  ticker: string;
  quantity: number;
  averagePrice: number;
  currentPrice: number;
  totalDividends: number;
}

export interface LogisticsStop {
  id: string;
  city: string;
  type: 'hotel' | 'border' | 'checkpoint' | 'stop' | 'mc_sede';
  name: string;
  coordinates?: { lat: number; lng: number };
  notes?: string;
}

export interface TripConfig {
  id: string;
  date: string;
  usdRate: number;
  pygRate: number; // 1 BRL = X PYG
  tripTotalCost: number;
  quotaLimit: number; // usually $500 or $1000
}
