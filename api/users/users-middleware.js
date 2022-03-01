const { getUserByFilter } = require("./users-model");

const checkRegistrationFields = (req, res, next) => {
  const { username, password, phone_number } = req.body;
  if (!username) {
    next({ status: 400, message: "missing username" });
  } else if (!password) {
    next({ status: 400, message: "missing password" });
  } else if (!phone_number) {
    next({ status: 400, message: "missing phone number" });
  } else {
    next();
  }
};

const usernameUnique = async (req, res, next) => {
  try {
    const { username } = req.body;
    const usernameExists = await getUserByFilter({ username });
    if (usernameExists) {
      next({ status: 400, message: "username already exists" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const phoneNumberUnique = async (req, res, next) => {
  try {
    const { phone_number } = req.body;
    const phoneNumberExists = await getUserByFilter({ phone_number });
    if (phoneNumberExists) {
      next({ status: 400, message: "phone number already exists" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.body;
    const usernameFound = await getUserByFilter({ username });
    if (usernameFound) {
      next();
    } else {
      next({ status: 401, message: "invalid credentials" });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkRegistrationFields,
  usernameUnique,
  phoneNumberUnique,
  checkUsernameExists,
};
