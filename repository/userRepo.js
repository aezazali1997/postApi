const User=require('../models/users');
class UserRepo {
  constructor() {
      }
  async getAllUsers() {
    return await User.find();
  }
  async getUserById(id) {
    let user;
    try{
        user= await User.findById(id);
    }
    catch(ex){
      console.log(ex)
    }
    return user;
  }
  async getUserByEmail(email) {
    let user;
    try{
      user= await User.findOne({email:email})
    }
    catch(ex)
    {
      console.log(ex);
    }
   
    return user;
  }
  async saveUser(user) {
    try {     
      let newUser=new User({
        name:user.name,
        email:user.email,
        password:user.password,
        role:user.role
      }) 
    await newUser.save(newUser);
    console.log("user saved...");

    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = UserRepo;
