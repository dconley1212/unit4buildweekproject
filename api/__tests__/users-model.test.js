const usersModel = require("../users/users-model");
const db = require("../data/db-config");

//left off with an error on the get user by filter db function and need to correct it

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("db functions for users", () => {
  test("getAllUsers function returns the right amount of users", async () => {
    const allUsers = await usersModel.getAllUsers();
    expect(allUsers).toHaveLength(3);
  });
  test("getAllUsers db function returns the users correctly", async () => {
    const allUsers = await usersModel.getAllUsers();
    expect(allUsers).toEqual([
      {
        username: "amyconley",
        password: "lkavgs",
        user_id: 1,
        phone_number: "8014344556",
      },
      {
        username: "daveconley",
        password: "slkdfjl",
        user_id: 2,
        phone_number: "8015453322",
      },
      {
        username: "romee",
        password: "qwedfc",
        user_id: 3,
        phone_number: "8012149078",
      },
    ]);
  });
  test("getUserById db function returns the correct user by user_id", async () => {
    const user_id = 1;
    const [user] = await usersModel.getUserById(user_id);
    expect(user).toHaveProperty("phone_number");
    expect(user.phone_number).toBe("8014344556");
    expect(user).toMatchObject({
      username: "amyconley",
      password: "lkavgs",
      user_id: 1,
      phone_number: "8014344556",
    });
  });
  test("getUserByFilter db function returns the correct user by filter given", async () => {
    const username = "amyconley";
    const [user] = await usersModel.getUserByFilter({ username });
    console.log(user);
    expect(user).toMatchObject({
      username: "amyconley",
      password: "lkavgs",
      user_id: 1,
      phone_number: "8014344556",
    });
  });
});
