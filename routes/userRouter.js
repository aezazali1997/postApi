const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControlller");
const authMW = require("../middlewares/auth");

router.get(
  "/",
  authMW.authenticate,
  authMW.authorize("admin"),
  userController.getUser
);
router.get(
  "/:userId",
  authMW.authenticate,
  authMW.authorize("admin"),
  userController.getUserById
);
router.post(
  "/",
  authMW.authenticate,
  authMW.authorize("admin"),
  userController.saveUser
);

module.exports = router;
