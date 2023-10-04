"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TariffService = void 0;
class TariffService {
    tariffs = [
        { name: "Product A", type: 1, baseCost: 5, additionalKwhCost: 22 },
        {
            name: "Product B",
            type: 2,
            includedKwh: 4000,
            baseCost: 800,
            additionalKwhCost: 30,
        },
    ];
    // Function to calculate annual cost based on tariff type
    calculateAnnualCost(tariff, annualConsumption) {
        switch (tariff.type) {
            case 1:
                return (tariff.baseCost * 12 + tariff.additionalKwhCost * annualConsumption);
            case 2:
                if (annualConsumption <= tariff.includedKwh) {
                    return tariff.baseCost;
                }
                else {
                    return (tariff.baseCost +
                        (annualConsumption - tariff.includedKwh) *
                            tariff.additionalKwhCost);
                }
            default:
                return 0;
        }
    }
    compareTariffs(consumption) {
        return this.tariffs
            .map((tariff) => ({
            ...tariff,
            annualCost: this.calculateAnnualCost(tariff, consumption),
        }))
            .sort((a, b) => a.annualCost - b.annualCost);
    }
}
exports.TariffService = TariffService;
