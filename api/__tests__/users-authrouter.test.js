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

let token;

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
  test("[Post] /login api is giving a 200 status when user tries to log in", async () => {
    const user = {
      username: "amyconley",
      password: "lkavgs",
      phone_number: 8014344556,
    };
    const res = await request("http://localhost:9000/api/users/auth")
      .post("/login")
      .send(user);
    token = res.body.token;
    expect(res.status).toBe(200);
  });
  test("[PUT] /register api is giving 200 status when user tries to log in", async () => {
    const updatedUser = {
      username: "amyconley",
      password: "adjgfio",
      phone_number: 8014344556,
    };
    const res = await request("http://localhost:9000/api/users/auth")
      .put("/register")
      .send(updatedUser)
      .set("authorization", token);

    expect(res.status).toBe(200);
  });
});
