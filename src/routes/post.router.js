const Router = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
} = require("../controllers/post.controller");

const postRouter = Router();

postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);
postRouter.put("/:id", editPost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter;
