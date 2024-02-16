const Joi = require("joi");

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

module.exports = emailSchema;
