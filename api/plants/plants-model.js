const db = require("../data/db-config");

function getAllPlants() {
  return db("plants");
}

function getPlantsWithUserId(user_id) {
  return db("plants").where("user_id", user_id);
}

function getPlantByPlantId(plant_id) {
  return db("plants").where("plant_id", plant_id);
}

async function addPlants(plant) {
  const [newPlant] = await db("plants").insert(plant, [
    "plant_id",
    "nickname",
    "species",
    "h20_frequency",
    "image",
    "user_id",
    "color",
  ]);

  return newPlant;
}

module.exports = {
  getAllPlants,
  getPlantsWithUserId,
  getPlantByPlantId,
  addPlants,
};
