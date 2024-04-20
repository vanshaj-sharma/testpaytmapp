const JWT_SECRET = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (res, req, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({
      message: "Invalid Bearer absent",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      message: "token is not valid",
    });
  }
};

module.exports = {
  authMiddleware,
};
