const express=require('express');
const router = express.Router();
const postController=require('../controllers/postController');
const authMW=require('../middlewares/auth');

router.get('/',authMW.authenticate,postController.getPost);
router.get("/:postId", authMW.authenticate, postController.getPostbyId);
router.post("/", authMW.authenticate, postController.savePost);
module.exports=router;