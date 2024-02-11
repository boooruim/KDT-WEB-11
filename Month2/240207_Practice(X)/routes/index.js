const express = require("express");
const router = express.Router();

const controller = require("../controller/index.js");

// router
router.get("/", controller.main);

router.post("/axios", controller.axios);

module.exports = router;
