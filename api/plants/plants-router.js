const router = require("express").Router();
const {
  restricted,
  allRequiredFields,
  checkIfPlantExists,
} = require("./plants-middleware");
const Plants = require("./plants-model");

//these routes have been tested and are working on postman, except get by plant id

router.get("/:user_id", restricted, async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const [plantsByUser] = await Plants.getPlantsWithUserId(user_id);
    res.status(200).json(plantsByUser);
  } catch (err) {
    next(err);
  }
});

router.post(
  "/:user_id",
  restricted,
  allRequiredFields,
  async (req, res, next) => {
    try {
      const newPlant = await Plants.addPlants(req.body);
      res.status(200).json(newPlant);
    } catch (err) {
      next(err);
    }
  }
);

router.get(
  "/:user_id/:plant_id",
  restricted,
  checkIfPlantExists,
  async (req, res, next) => {
    try {
      const { plant_id } = req.params;
      const plantById = await Plants.getPlantByPlantId(plant_id);
      res.status(200).json({ plantById });
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:user_id/:plant_id",
  restricted,
  allRequiredFields,
  checkIfPlantExists,
  async (req, res, next) => {
    try {
      const { plant_id } = req.params;
      await Plants.updatePlant(plant_id, req.body);
      const [newUpdatedPlant] = await Plants.getPlantByPlantId(plant_id);
      res.status(200).json(newUpdatedPlant);
    } catch (err) {
      next(err);
    }
  }
);

router.delete(
  "/:user/:plant_id",
  restricted,
  checkIfPlantExists,
  async (req, res, next) => {
    try {
      const { plant_id } = req.params;
      const [deletedPlant] = await Plants.deletePlant(plant_id);
      res.status(200).json(deletedPlant);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
