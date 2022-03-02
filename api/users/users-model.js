const db = require("../data/db-config");
const { allRequiredFields } = require("../plants/plants-middleware");

function getAllUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where("id", id);
}

function getUserByFilter(filter) {
  return db("users").where(filter);
}

async function insertUser(user) {
  const [newUserObject] = await db("users").insert(user, [
    "user_id",
    "username",
    "password",
  ]);
  return newUserObject;
}

async function updateUserInfo(username, user) {
  const updateUser = await getUserByFilter(username);
  await db("users").where(username).update(user);
  return updateUser;
}

module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
  insertUser,
  updateUserInfo,
};
