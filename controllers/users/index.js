const { ctrlWrapper } = require("../../helpers/index.js");
const register = require("./register.js");
const login = require("./login.js");
const getCurrent = require("./getCurrent.js");
const logout = require("./logout.js");
const changeAvatar = require("./changeAvatar.js");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  changeAvatar: ctrlWrapper(changeAvatar),
};
