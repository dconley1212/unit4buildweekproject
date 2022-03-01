const router = require("express").Router();
const { restricted, allRequiredFields } = require("./plants-middleware");
const Plants = require("./plants-model");

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

module.exports = router;
