const Contact = require("../db/models");

const createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const result = await Contact.create({ name, email, phone });
  res.status(201).json(result);
};

module.exports = createContact;
