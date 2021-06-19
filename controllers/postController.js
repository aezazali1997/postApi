
const PostRepo=require('../repository/postRepo');
let post=new PostRepo();
module.exports = {
  getPost: (req, res) => {
    let posts=post.getAllPosts();
    res.send(posts);
  },
  getPostbyId:(req,res) => {
      let postById=post.getPostById(req.params.postId);
      res.send(postById)
      },
  savePost:(req,res) =>{
    post.savePost(req.body);
    res.send('saved')
  }
};
