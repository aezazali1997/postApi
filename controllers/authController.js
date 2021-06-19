const ErrorResponse = require("../utils/errorResponse");
const UserRepo = require("../repository/userRepo");
const repo = new UserRepo();
const jwt = require("jsonwebtoken");
const jwtAuthKey=require('../constants/authConstant');

module.exports = {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password){
      return next(new ErrorResponse("Email and password are required", 400));
    }
    
    let user = await repo.getUserByEmail(email);
    
    if(!user){
      return next(new ErrorResponse('Invalid Credentials',401))
    }
    if (!user.matchPassword(password)) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }
    let token=jwt.sign({
      email:user.email
    },
    jwtAuthKey.jwtKey,
    {expiresIn:"1h"},
    )
    res.json({
      succes:true,
      token,
    });
  }
};
