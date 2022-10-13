const usersModel = require("../users/users-model");
const db = require("../data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

describe("db functions for users", () => {
  test("getAllUsers function returns the right amount of users", async () => {
    const allUsers = await usersModel.getAllUsers();
    expect(allUsers).toHaveLength(3);
  });
});
