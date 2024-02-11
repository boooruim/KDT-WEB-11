const express = require("express");
const router = express.Router();

const controller = require("../controller/comment.js");

// router
router.get("/", controller.main);

router.get("/comments", controller.comments);

router.get("/comment/:page", controller.comment);

module.exports = router;
