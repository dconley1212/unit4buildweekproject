const authRouter = require("../users/users-authrouter");
const request = require("supertest");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.seed.run();
});

beforeEach(async () => {
  await db.migrate.latest();
  await db.migrate.rollback();
});

afterAll(async () => {
  await db.destroy();
});

describe("all APIs for authentication and authorization", () => {
  test("[POST] /register api is giving a 200 ok status", async () => {
    const newUser = {
      username: "dconley",
      password: "Walter123*",
      phone_number: "8017778565",
    };
    const res = await request("http://localhost:9000/api/users/auth")
      .post("/register")
      .send(newUser);

    expect(res.status).toBe(200);
  });
});
