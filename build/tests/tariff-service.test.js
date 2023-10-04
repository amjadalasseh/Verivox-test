"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tariff_service_1 = require("../src/services/tariff-service");
describe("TariffService", () => {
    let tariffService;
    beforeEach(() => {
        tariffService = new tariff_service_1.TariffService();
    });
    it("should calculate annual cost correctly for Product A", () => {
        const tariffA = {
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
        const tariffB = {
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
