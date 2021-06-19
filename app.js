const express = require("express");
const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const errorHandler = require("./middlewares/error");
const authRouter = require("./routes/authRoute");
const app = express();
const cors=require('cors');
const connectDB=require('./config/db');
const port = 30001;

connectDB();
app.use(express.json());
app.use(cors());
app.get("/", (req, res, next) => {
  res.send("hello world");
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/auth", authRouter);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`app is listeneing on port ${port}`);
});
