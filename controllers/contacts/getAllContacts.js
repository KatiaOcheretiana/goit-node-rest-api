const { Contact } = require("../../db/models/index.js");

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const { page = 1, limit = 10, favorite } = req.query;

  const skip = (page - 1) * limit;
  const allContacts = await Contact.find(
    { owner },
    {
      skip,
      limit,
      favorite,
    }
  ).populate("owner", "email");

  res.status(200).json(allContacts);
};

module.exports = getAllContacts;
