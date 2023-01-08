const postController = require("../controllers/postController.js");

const router = require("express").Router();

router.post("/addPost", postController.addPost);
router.get("/allPosts", postController.getAllPosts);
router.get("/published", postController.getPublishedPost);
router.get("/:id", postController.getSinglePost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;