const Contact = require("../db/models");

const { HttpError } = require("../helpers");

const updateFavorite = async (req, res, next) => {
  const { favorite } = req.body;

  if (favorite === undefined) {
    throw HttpError(400, "Missing field favorite");
  }

  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, favorite, {
    new: true,
  });

  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = updateFavorite;
