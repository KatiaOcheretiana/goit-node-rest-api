const { validObjectId, isValidObjectId } = require("mongoose");
const HttpError = require("./HttpError");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  const { contactId } = req.params;
  if (!isValidObjectId(contactId || id)) {
    next(HttpError(400, `${contactId || id} is not valid id`));
  }
  next();
};

module.exports = isValidId;
