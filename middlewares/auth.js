const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const UserRepo = require("../repository/userRepo");
const userrepo = new UserRepo();
const authKey = require("../constants/authConstant");

module.exports = {
  authenticate: async(req, res, next) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return next(new ErrorResponse("Unauthorized request", 401));
    }
    try {
      const decode = jwt.verify(token, authKey.jwtKey);
      req.user =await userrepo.getUserByEmail(decode.email);
      next();
    } catch (er) {
      console.log(er);
      return next(new ErrorResponse("Unauthorized request", 401));
    }
  },
  authorize: (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(new ErrorResponse("Not authorized for this route", 403));
      }
      next();
    };
  }
};
