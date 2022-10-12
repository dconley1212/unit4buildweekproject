/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const bcrypt = require("bcrypt");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "amyconley",
          password: bcrypt.hashSync("lkavgs", 8),
          phone_number: 8014344556,
        },
        {
          username: "daveconley",
          password: bcrypt.hashSync("slkdfjl", 8),
          phone_number: 8015453322,
        },
        {
          username: "romee",
          password: bcrypt.hashSync("qwedfc", 8),
          phone_number: 8012149078,
        },
      ]);
    });
};
