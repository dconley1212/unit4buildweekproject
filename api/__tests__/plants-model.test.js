const plantsModel = require("../plants/plants-model");
const db = require("../data/db-config");

test("it is the correct environment for the tests", () => {
  expect(process.env.TESTING_DATABASE_URL).toBe(
    "postgresql://postgres:AmyandDave101918@localhost:5432/waterplants_test"
  );
});
