module.exports = (carSchema) => {
  return (req, res, next) => {
    const { error } = carSchema.validate(req.body);

    if (error) {
      const errorMessage = error.details[0].message;
      res.status(400);
      res.json({ code: 400, message: `Joi validator: ${errorMessage}` });
      next();
    }
    next();
  };
};
