const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/index");

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

module.exports = {
  restricted,
  allRequiredFields,
};
