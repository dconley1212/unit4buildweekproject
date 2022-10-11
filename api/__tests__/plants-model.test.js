const plantsModel = require("../plants/plants-model");
const Knex = require("knex");
const knexConfig = require("../../knexfile");
const {
  getAllPlants,
  getPlantsWithUserId,
  getPlantByPlantId,
} = require("../plants/plants-model");
const db = require("../data/db-config");

const knex = Knex(knexConfig.testing.connection);

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

afterAll((done) => {
  knex.destroy();
  done();
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
  describe("plants db function getAllPlantsWithUserID", () => {
    test("get the correct number of plants by user_id", async () => {
      const user_id = 1;
      const userPlants = await getPlantsWithUserId(user_id);
      expect(userPlants).toHaveLength(2);
    });
    test("the right plant data is showing for each request to the database with a user_id", async () => {
      const firstUserId = 1;
      const secondUserId = 2;
      const firstUserPlants = await getPlantsWithUserId(firstUserId);
      expect(firstUserPlants).toEqual([
        {
          nickname: "Fiddle Leaf Fig Tree",
          species: "Ficus Lyrata",
          h20_frequency: "once a week",
          user_id: 1,
          color: "Unknown",
          image: null,
          plant_id: 1,
        },
        {
          nickname: "Snake Plant",
          species: "Dracaena trifasciata",
          h20_frequency: "once a week",
          user_id: 1,
          color: "Unknown",
          image: null,
          plant_id: 2,
        },
      ]);
      const secondUserPlants = await getPlantsWithUserId(secondUserId);
      expect(secondUserPlants).toEqual([
        {
          nickname: "English Ivy",
          species: "Common Ivy",
          h20_frequency: "twice a week",
          user_id: 2,
          color: "Unknown",
          image: null,
          plant_id: 3,
        },
      ]);
    });
  });
  describe("function getPlantByPlantId querying the database", () => {
    test("get the right plant with the plant id", async () => {
      let plant_id = 1;
      const [plant] = await getPlantByPlantId(plant_id);
      expect(plant).toHaveProperty("nickname", "Fiddle Leaf Fig Tree");
      expect(plant).toHaveProperty("species", "Ficus Lyrata");
      expect(plant).toHaveProperty("h20_frequency", "once a week");
      expect(plant).toHaveProperty("user_id", 1);
      expect(plant.plant_id).toBe(1);
      expect(plant.image).toBe(null);
      expect(plant.color).toBe("Unknown");
      plant_id = 2;
      const [plantTwo] = await getPlantByPlantId(plant_id);
      expect(plantTwo.nickname).toBe("Snake Plant");
      expect(plantTwo.species).toBe("Dracaena trifasciata");
      expect(plantTwo.h20_frequency).toBe("once a week");
      expect(plantTwo.user_id).toBe(1);
      expect(plantTwo).toHaveProperty("plant_id", 2);
      expect(plantTwo.image).toBe(null);
      expect(plantTwo.color).toBe("Unknown");
      plant_id = 3;
      const [plantThree] = await getPlantByPlantId(plant_id);
      expect(plantThree.nickname).toBe("English Ivy");
      expect(plantThree.species).toBe("Common Ivy");
      expect(plantThree.h20_frequency).toBe("twice a week");
      expect(plantThree.user_id).toBe(2);
      expect(plantThree.plant_id).toBe(3);
      expect(plantThree.image).toBe(null);
      expect(plantThree.color).toBe("Unknown");
    });
  });
});
