const express = require("express");
const { validateBody } = require("../helpers");
const { registerSchema, loginSchema, emailSchema } = require("../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  changeAvatar,
  verifyEmail,
  resendVerify,
} = require("../controllers/users");

const { authentificate, upload } = require("../middleware/index");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(registerSchema), register);

usersRouter.post("/login", validateBody(loginSchema), login);

usersRouter.post("/logout", authentificate, logout);

usersRouter.get("/current", authentificate, getCurrent);

usersRouter.patch(
  "/avatars",
  authentificate,
  upload.single("avatar"),
  changeAvatar
);

usersRouter.get("/verify/:verificationToken", verifyEmail);

usersRouter.post("/verify", validateBody(emailSchema), resendVerify);

module.exports = usersRouter;
