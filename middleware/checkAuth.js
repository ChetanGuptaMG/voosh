// middleware to check if the user is logged in
const checkAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "Not authorized" });
  } else {
    next();
  }
};

module.exports = checkAuth;

