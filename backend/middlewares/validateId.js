const { isValidObjectId } = require("mongoose");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400);
    res.json({ code: 400, message: `Id: ${id} is not valid` });
    next();
  }
  next();
};
