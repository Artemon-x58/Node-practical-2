const Joi = require("joi");

const carSchema = Joi.object({
  title: Joi.string().required(),
  color: Joi.string().required(),
  price: Joi.string(),
  year: Joi.string(),
});

module.exports = carSchema;
