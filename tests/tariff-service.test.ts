import { TariffService } from "../src/services/tariff-service";
import { Tariff } from "../src/models/tariff";

describe("TariffService", () => {
  let tariffService: TariffService;

  beforeEach(() => {
    tariffService = new TariffService();
  });

  it("should calculate annual cost correctly for Product A", () => {
    const tariffA: Tariff = {
      name: "Product A",
      type: 1,
      baseCost: 5,
      additionalKwhCost: 22,
    };
    const consumption = 3500;
    const expectedCost = 77060;

    const annualCost = tariffService.calculateAnnualCost(tariffA, consumption);

    expect(annualCost).toBe(expectedCost);
  });

  it("should calculate annual cost correctly for Product B", () => {
    const tariffB: Tariff = {
      name: "Product B",
      type: 2,
      includedKwh: 4000,
      baseCost: 800,
      additionalKwhCost: 30,
    };
    const consumption = 3500;
    const expectedCost = 800;

    const annualCost = tariffService.calculateAnnualCost(tariffB, consumption);

    expect(annualCost).toBe(expectedCost);
  });
});
