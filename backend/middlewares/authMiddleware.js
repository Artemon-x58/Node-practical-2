const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // отримаємо токен
  // розшифруємо токен
  // передаємо інформацію з токена далі
  try {
    const [type, token] = req.headers.authorization.split(" ");
    if (type !== "Bearer" || !token) {
      res.status(401);
      throw new Error("Provide correct bearer token");
    }
    const decodet = jwt.verify(token, "cat");

    req.user = decodet;
    next();
  } catch (error) {
    res.status(401).json({ code: 401, message: error.message });
  }
};
// students: [ 'Andrii', 'Artem', 'Pavlo' ],
//   id: '656c5459ce0a661e7c7e1d45',
//   iat: 1701598324,
//   exp: 1701684724
