const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../db/models");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const authentificate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    next(HttpError(401));
  }

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    next(HttpError(401));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user.token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authentificate;
