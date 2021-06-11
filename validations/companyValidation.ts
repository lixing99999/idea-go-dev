const Joi = require("joi");

export const companyValidation = {
  name: Joi.string(),
  description: Joi.string(),
  from: Joi.date(),
  to: Joi.date(),
};
