const plantsModel = require("../plants/plants-model");
const { getAllPlants } = require("../plants/plants-model");
const db = require("../data/db-config");

test("it is the correct environment for the tests", () => {
  expect(process.env.TESTING_DATABASE_URL).toBe(
    "postgresql://postgres:AmyandDave101918@localhost:5432/waterplants_test"
  );
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe("plants db access functions", () => {
  describe("plantModel.getAll", () => {
    test("getAll plants function gives you all plants", async () => {
      const plants = await getAllPlants();
      expect(plants.length).toBe(3);
    });
    test("resolve to the correct plant shape", async () => {
      const plants = await getAllPlants();
      expect(plants[0]).toHaveProperty("user_id", 1);
      expect(plants[0]).toHaveProperty("h20_frequency", "once a week");
      expect(plants[0]).toHaveProperty("species", "Ficus Lyrata");
      expect(plants[0]).toHaveProperty("nickname", "Fiddle Leaf Fig Tree");

      expect(plants[1]).toMatchObject({
        nickname: "Snake Plant",
        species: "Dracaena trifasciata",
        h20_frequency: "once a week",
        user_id: 1,
      });
      expect(plants[2]).toMatchObject({
        nickname: "English Ivy",
        species: "Common Ivy",
        h20_frequency: "twice a week",
        user_id: 2,
      });
    });
  });
});
