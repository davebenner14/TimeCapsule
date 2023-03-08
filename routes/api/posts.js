const express = require("express");
const router = express.Router();
const postsCtrl = require("../../controllers/api/posts");

router.get("/", postsCtrl.index);
router.get("/:id", postsCtrl.show);
router.post("/", postsCtrl.createPost);

module.exports = router;
