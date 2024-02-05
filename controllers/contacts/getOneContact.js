const { Contact } = require("../../db/models");

const { HttpError } = require("../../helpers");

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.status(200).json(result);
};

module.exports = getOneContact;
