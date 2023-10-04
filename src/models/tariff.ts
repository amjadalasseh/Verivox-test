export interface Tariff {
  name: string;
  type: number;
  baseCost?: number;
  additionalKwhCost?: number;
  includedKwh?: number;
}
