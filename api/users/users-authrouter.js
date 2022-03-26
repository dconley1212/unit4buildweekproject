const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  insertUser,
  getUserByFilter,
  updateUserInfo,
} = require("./users-model");
const { BCRYPT_ROUNDS, JWT_SECRET } = require("../../config/index");
const {
  phoneNumberUnique,
  usernameUnique,
  checkRegistrationFields,
  checkUsernameExists,
} = require("./users-authmiddleware");
const { restricted } = require("../plants/plants-middleware");

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    phone_number: user.phone_number,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

router.post(
  "/register",
  checkRegistrationFields,
  usernameUnique,
  phoneNumberUnique,
  async (req, res, next) => {
    try {
      const { username, password, phone_number } = req.body;
      const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);
      const user = { username, password: hash, phone_number };
      const newUser = await insertUser(user);
      res.status(204).json(newUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", checkUsernameExists, (req, res, next) => {
  const { username, password } = req.body;
  getUserByFilter({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = buildToken(user);
        console.log("user found");
        res.status(204).json({
          message: `Welcome back ${user.username}`,
          token: token,
        });
      } else {
        next({ status: 401, message: "invalid credentials" });
      }
    })
    .catch(next);
});

router.put(
  "/update",
  restricted,
  checkUsernameExists,
  async (req, res, next) => {
    try {
      const { username, password, phone_number } = req.body;
      const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS);
      const user = { username, password: hash, phone_number };
      const [updatedUser] = await updateUserInfo({ username }, user);
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
