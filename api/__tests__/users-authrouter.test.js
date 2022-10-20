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
      username: "aConley",
      password: "Romee123*",
      phone_number: "8017775785",
    };
    const res = await request("http://localhost:9000/api/users/auth")
      .post("/register")
      .send(newUser);
    expect(res.status).toBe(200);
  });
  test("[POST] /regiester api is giving a 400 status if user already exists", async () => {
    const user = {
      username: "amyconley",
      password: "lkavgs",
      phone_number: 8014344556,
    };
    const res = await request("http://localhost:9000/api/users/auth")
      .post("/register")
      .send(user);
    expect(res.status).toBe(400);
  });
});
