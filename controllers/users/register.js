const { User } = require("../../db/models");
const { HttpError, sendEmail } = require("../../helpers");
const bcryptjs = require("bcryptjs");
const { nanoid } = require("nanoid");
require("dotenv").config();

const gravatar = require("gravatar");

const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { password, email } = req.body;

  const emailUsed = await User.findOne({ email });
  if (emailUsed) {
    throw HttpError(409, "Email in use");
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: "starter",
    },
  });
};

module.exports = register;
