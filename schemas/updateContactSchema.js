const Joi = require("joi");

const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

module.exports = updateContactSchema;
