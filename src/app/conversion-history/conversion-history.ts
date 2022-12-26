export interface ConversionHistory {
  fromCurrency: string;
  fromCurrencyRate: number;
  toCurrency: string;
  toCurrencyRate: number;
  date: string;
  amount: number;
}
