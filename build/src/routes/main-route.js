"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tariff_service_1 = require("../services/tariff-service");
const router = (0, express_1.Router)();
const tariffService = new tariff_service_1.TariffService();
/**
 * @swagger
 * /compare:
 *   post:
 *     summary: Compare electricity tariffs based on consumption.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               consumption:
 *                 type: number
 *                 description: Annual electricity consumption in kWh.
 *             example:
 *               consumption: 4500
 *     responses:
 *       '200':
 *         description: List of tariff comparison results sorted by annual costs.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   tariffName:
 *                     type: string
 *                     description: Name of the tariff.
 *                   annualCosts:
 *                     type: number
 *                     description: Annual costs in €.
 *                 example:
 *                   tariffName: Product A
 *                   annualCosts: 1050
 */

router.get("/compare", (req, res) => {
  const { consumption } = req.query;
  if (!consumption || isNaN(+consumption) || +consumption <= 0) {
    return res.status(400).json({ error: "Invalid consumption value" });
  }
  const userConsumption = +consumption;
  const tariffs = tariffService.compareTariffs(userConsumption);
  res.json(tariffs);
});
exports.default = router;
