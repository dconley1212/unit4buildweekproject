const plantsRouter = require("../plants/plants-router");
const db = require("../data/db-config");
const request = require("supertest");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

// left off trying to figure out how to get the token before every test or
// all the tests and save the token to be send for each request to the plants
// router.

let token;

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  const hashPassword = await bcrypt.hashSync("lkavgs", 8);
  await db.seed.run();
  const res = await request("http://localhost:9000/api/users/auth")
    .post("/login")
    .send({
      username: "amyconley",
      password: "lkavgs",
      phone_number: 8014344556,
    });
  token = res.body.token;
  console.log(token);
});

afterAll(async () => {
  await db.destroy();
});

describe("All APIs for the plant router", () => {
  test("[GET] /:user_id returns 401 error status because there is no token sent", async () => {
    const user_id = 1;
    const res = await request("http://localhost:9000/api/plants").get(
      `/${user_id}`
    );
    expect(res.status).toBe(401);
  });
  test("[GET] /:user_id return 200 ok status", async () => {
    const res = await request("http://localhost:9000/api/plants")
      .get("/1")
      .set("authorization", token);
    expect(res.status).toBe(200);
  });
});
