const plantsRouter = require("../plants/plants-router");
const db = require("../data/db-config");
const request = require("supertest");

// left off trying to figure out how to get the token before every test or
// all the tests and save the token to be send for each request to the plants
// router.

let token;

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  //   const hashPassword = await bcrypt.hashSync("lkavgs", 8);
  await db.seed.run();
  const res = await request("http://localhost:9000/api/users/auth")
    .post("/login")
    .send({
      username: "dc12",
      password: "Walter123",
      phone_number: 8017736554,
    });
  token = res.body.token;
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
      .get("/8")
      .set("authorization", token);
    expect(res.status).toBe(200);
  });
  test("[GET] /:user_id plants with associated user", async () => {
    const res = await request("http://localhost:9000/api/plants")
      .get("/8")
      .set("authorization", token);
    expect(res.body).toMatchObject({});
    expect(res.body).toHaveLength(3);
  });
  test("[POST] /:user_id get a 200 ok status", async () => {
    const res = await request("http://localhost:9000/api/plants")
      .post("/8")
      .send({
        nickname: "American Marigold",
        species: "Asteraceae",
        h20_frequency: "twice a week",
        user_id: 8,
      })
      .set("authorization", token);
    expect(res.status).toBe(200);
  });
  test("[POST /:user_id get a 400 status when certain data is missing", async () => {
    const res = await request("http://localhost:9000/api/plants")
      .post("/8")
      .send({
        nickname: "American Marigold",
        species: "",
        h20_frequency: "twice a week",
        user_id: 8,
      })
      .set("authorization", token);
    expect(res.status).toBe(400);
  });
});
