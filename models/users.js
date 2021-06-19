const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is requirred"],
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is requirred"],
  },
  role: {
    type: String,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.matchPassword = async function (password){
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model("User", UserSchema);
