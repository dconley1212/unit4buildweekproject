exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable().unique();
      users.string("password", 200).notNullable();
      users.string("phone_number", 200).notNullable().unique();
    })
    .createTable("plants", (plants) => {
      plants.increments("plant_id");
      plants.string("nickname", 256).notNullable();
      plants.string("species", 256).notNullable();
      plants.string("h20_frequency").notNullable();
      plants.binary("image", 256);
      plants
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("plants").dropTableIfExists("users");
};
