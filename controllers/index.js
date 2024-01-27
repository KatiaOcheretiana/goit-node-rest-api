const { ctrlWrapper } = require("../helpers/index.js");
const getAllContacts = require("./getAllContacts.js");
const getOneContact = require("./getOneContact.js");
const deleteContact = require("./deleteContact.js");
const createContact = require("./createContact.js");
const updateContact = require("./updateContact.js");
const updateFavorite = require("./updateFavorite.js");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
