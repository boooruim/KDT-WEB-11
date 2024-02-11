const express = require("express");

const controller = require("../controller/user");

const router = express.Router();

router.get("/", controller.main); //단순 페이지
router.post("/register", controller.register); // 데이터 요청 및 응답

module.exports = router;
