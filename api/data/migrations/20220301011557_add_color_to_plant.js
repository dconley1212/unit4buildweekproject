exports.up = async (knex) => {
  await knex.schema.table("plants", function (t) {
    return t.string("color").nullable(true).defaultTo("Unknown");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  await knex.schema.table("plants", function (t) {
    return t.dropColumn("color");
  });
};
