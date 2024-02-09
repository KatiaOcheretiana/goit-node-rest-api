const express = require("express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../controllers/contacts");

const { validateBody, isValidId } = require("../helpers");

const { authentificate } = require("../middleware");

const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas");

const contactsRouter = express.Router();

contactsRouter.get("/", authentificate, getAllContacts);

contactsRouter.get("/:id", authentificate, isValidId, getOneContact);

contactsRouter.delete("/:id", authentificate, isValidId, deleteContact);

contactsRouter.post(
  "/",
  authentificate,
  validateBody(createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  authentificate,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:contactId/favorite",
  authentificate,
  isValidId,
  validateBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = contactsRouter;
