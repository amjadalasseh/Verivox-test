import request from "supertest";
import app from "../src/server";

describe("Electricity Price Comparison API", () => {
  it("should return a sorted list of tariffs based on consumption", async () => {
    const response = await request(app).get("/compare?consumption=3500");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Assuming you have two mock tariffs

    expect(response.body[0].name).toBe("Product B");
    expect(response.body[1].name).toBe("Product A");
  });

  it("should handle invalid consumption value", async () => {
    const response = await request(app).get("/compare?consumption=abc"); // Invalid consumption value

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid consumption value" });
  });
});
