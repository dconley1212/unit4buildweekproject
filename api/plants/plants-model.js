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
  const [id] = await db("plants").insert(plant);
  const newPlant = await getPlantByPlantId(id);
  return newPlant;
}

module.exports = {
  getAllPlants,
  getPlantsWithUserId,
  getPlantByPlantId,
  addPlants,
};
