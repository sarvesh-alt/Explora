import jwt from "jsonwebtoken";

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  console.log("Token in cookies:", token);

  if (!token) {
    return res.status(401).json({ success: false, message: "You're not authorized" });
  }

  // If the token exists, verify it
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Token is invalid or expired" });
    }

    // Attach the decoded user info to the request object
    req.user = user;
    next(); // Proceed to the next middleware
  });
};

// Middleware to verify if the user is authorized
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      return res.status(403).json({ success: false, message: "You are not authorized" });
    }
  });
};

// Middleware to verify if the user is an admin
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(403).json({ success: false, message: "You are not authorized" });
    }
  });
};
