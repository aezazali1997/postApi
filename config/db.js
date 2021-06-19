const mongoose = require("mongoose");
const appConstants=require('../constants/appConstants');
const connect = async ()=>{

try{
  const conn = await mongoose.connect(appConstants.mongoDB.connString, {
    useNewUrlParsers: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  });
  console.log("connected to db",conn.connection.host);
}
catch(ex){
  console.log(ex);
}
}
module.exports=connect;
