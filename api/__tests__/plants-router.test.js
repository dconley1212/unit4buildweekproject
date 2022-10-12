const plantsRouter = require("../plants/plants-router");
const db = require("../data/db-config");
const request = require("supertest");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("All APIs for the plant router", () => {
  test("[GET] /:user_id returns 404 error status", async () => {
    const user_id = 1;
    const res = await request("http://localhost:9000/api/plants").get(
      `/${user_id}`
    );
    expect(res.status).toBe(404);
  });
});
