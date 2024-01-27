const express = require("express");
const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require("../controllers");

const { validateBody, isValidId } = require("../helpers");

const {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema,
} = require("../schemas");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(updateFavoriteSchema),
  updateFavorite
);

module.exports = contactsRouter;
