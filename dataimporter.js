const mongoose = require("mongoose");
const User = require("./models/users");
const Post = require('./models/post');
const fs = require("fs");
const appConstant=require('./constants/appConstants');


const users = JSON.parse(fs.readFileSync(process.cwd() + "/data/user.json"));
const posts = JSON.parse(fs.readFileSync(process.cwd() + "/data/post.json"));
const ImportData = async () => {
  try {
    await User.create(users)
    console.log("user created");
    let userResult = await User.find();
    console.log("users ",userResult);
    await Post.create(posts);
    console.log("post created");
    let postResult = await User.find();
    console.log("posts ",postResult);

  } catch (ex) {
    console.log("err" + ex);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("deleted all user");
    let userresult = await User.find();
    console.log("users ",userresult);
    await Post.deleteMany();
    console.log("deleted all post");
    let postresult = await User.find();
    console.log("posts ",postresult);
  } catch (ex) {
    console.log("err" + ex);
  }
};
if (process.argv[2] === "-i") {
  ImportData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
