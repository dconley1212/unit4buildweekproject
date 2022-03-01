/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex("plants")
    .del()
    .then(function () {
      return knex("plants").insert([
        {
          nickname: "Fiddle Leaf Fig Tree",
          species: "Ficus Lyrata",
          h20_frequency: "once a week",
          user_id: 1,
        },
        {
          nickname: "Snake Plant",
          species: "Dracaena trifasciata",
          h20_frequency: "once a week",
          user_id: 1,
        },
        {
          nickname: "English Ivy",
          species: "Common Ivy",
          h20_frequency: "twice a week",
          user_id: 2,
        },
      ]);
    });
};
