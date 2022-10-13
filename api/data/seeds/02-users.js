/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          username: "amyconley",
          password: "lkavgs",
          phone_number: 8014344556,
        },
        {
          username: "daveconley",
          password: "slkdfjl",
          phone_number: 8015453322,
        },
        {
          username: "romee",
          password: "qwedfc",
          phone_number: 8012149078,
        },
      ]);
    });
};
