const { Contact } = require("../../db/models");

const { HttpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    throw HttpError(400, "Body must have at least one field");
  }

  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404);
  }

  res.status(200).json(result);
};

module.exports = updateContact;
