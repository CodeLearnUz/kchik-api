const { Router } = require("express");
const {
  getAllPosts,
  addNewPost,
  getPostById,
  updataPost,
  deletePost,
} = require("../controllers/post.controlloer");

const router = Router();

router.get("/all", getAllPosts);
router.post("/add", addNewPost);
router.get("/:id", getPostById);
router.put("/:id", updataPost);
router.delete("/:id", deletePost);

module.exports = router;
