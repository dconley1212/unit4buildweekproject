const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/index");
const { getPlantByPlantId } = require("./plants-model");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        next({ status: 401, message: "bad token" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    next({ status: 401, message: "bad token" });
  }
};

const allRequiredFields = (req, res, next) => {
  const { user_id } = req.params;
  const { nickname, species, h20_frequency } = req.body;
  if (!nickname) {
    next({ status: 400, message: "missing nickname" });
  } else if (!species) {
    next({ status: 400, message: "missing species" });
  } else if (!h20_frequency) {
    next({ status: 400, message: "missing h20_frequency" });
  } else if (!user_id) {
    next({ status: 400, message: "missing user_id" });
  } else {
    next();
  }
};

const checkIfPlantExists = async (req, res, next) => {
  try {
    const { plant_id } = req.params;
    const plantById = await getPlantByPlantId(plant_id);
    if (plantById) {
      next();
    } else {
      next({ status: 404, message: "plant not found" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  restricted,
  allRequiredFields,
  checkIfPlantExists,
};
