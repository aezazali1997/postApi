const UserRepo = require("../repository/userRepo");
let users = new UserRepo();
module.exports = {
  getUser: async(req, res) => {
    let userData =await users.getAllUsers();
    res.send(userData);
  },
  getUserById: async(req, res) => {
    let userById = await users.getUserById(req.params.userId);
    console.log(userById);
    res.send(userById);
  },
  saveUser: (req, res) => {
    users.saveUser(req.body);
    res.send('saved')
  },
};
