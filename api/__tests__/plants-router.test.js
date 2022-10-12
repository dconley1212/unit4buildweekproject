const plantsRouter = require("../plants/plants-router");
const db = require("../data/db-config");
const request = require("supertest");

let token;

beforeAll(async (done) => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
  await request("http://localhost:9000/api/users/auth")
    .post("/login")
    .send({
      username: "amyconley",
      password: "lkavgs",
      phone_number: 8014344556,
    })
    .end((err, res) => {
      token = res.body.token;
    });
});

// beforeEach(async (done) => {

// });

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
  test("[GET] /:user_id return 200 ok status", async () => {
    const user_id = 1;
    const res = await request("http://localhost:9000/api/plants")
      .get(`/${user_id}`)
      .send(token);
    expect(res.status).toBe(200);
  });
});
