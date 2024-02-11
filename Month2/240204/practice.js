const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// http://localhost:8000/uploads/파일명
app.use("/uploads", express.static(__dirname + "/uploads"));

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },

    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const newName = req.body.id + ext;
      done(null, newName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

app.get("/", (req, res) => {
  res.render("practice");
});

// 실습의 초점: res.render()를 사용해라
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  res.render("practice_result", { file: req.file, info: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
