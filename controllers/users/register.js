const { User } = require("../../db/models");
const { HttpError } = require("../../helpers");
const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  const { password, email } = req.body;

  const emailUsed = await User.findOne({ email });
  if (emailUsed) {
    throw HttpError(409, "Email in use");
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashedPassword });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: "starter",
    },
  });
};

module.exports = register;
