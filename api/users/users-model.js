const db = require("../data/db-config");

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

module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
  insertUser,
};
