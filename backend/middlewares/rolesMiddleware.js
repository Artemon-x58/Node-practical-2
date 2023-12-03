module.exports = (rolesArray) => {
  return (req, res, next) => {
    try {
      const { roles } = req.user;
      let hasRole = false;
      roles.forEach((role) => {
        if (rolesArray.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        res.status(403);
        throw new Error("Forbidden");
      }
      next();
    } catch (error) {
      res.status(403).json({ code: 403, message: error.message });
    }
  };
};
// students: [ 'Andrii', 'Artem', 'Pavlo' ],
// id: '656c5c5e8682681177c72ebe',
// roles: [ 'ADMIN' ],
// iat: 1701600524,
// exp: 1701686924
