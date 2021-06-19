const fs = require("fs");
class PostRepo {
  constructor() {
    this.posts = [];
    this.loadData();
  }
  loadData() {
    try {
      let posts = fs.readFileSync(process.cwd() + "/data/post.json");
      let parsed = JSON.parse(posts);
      this.posts = parsed;
    } catch (error) {
      console.log(error);
    }
  }
  getAllPosts() {
    return this.posts;
  }
  getPostById(id) {
    let post = {};
    this.posts.forEach((pst) => {
      if (Number(pst.id) === Number(id)) {
        post = pst;
      }
    });
    return post;
  }
  savePost(post){
     try {
       this.posts.push(post);
       fs.writeFileSync(
         process.cwd() + "/data/post.json",
         JSON.stringify(this.posts)
       );
       this.loadData();
     } catch (error) {
       console.log(error);
     }

  }
}
module.exports = PostRepo;
