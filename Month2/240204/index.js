const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// http://localhost:8000/uploads/파일명
app.use("/uploads", express.static(__dirname + "/uploads"));

const upload = multer({
  dest: "uploads/",
});

//multer 세부설정
const uploadDetail = multer({
  //storage: 저장할 공간에 대한 정보

  storage: multer.diskStorage({
    // 파일 저장관련 설정

    destination(req, file, done) {
      done(null, "uploads/");
    },

    filename(req, file, done) {
      // extname() 확장자 추출
      const ext = path.extname(file.originalname);

      //basename(): 파일이름을 추출, (파일이름, 확장자)
      const newName = path.basename(file.originalname, ext) + Date.now() + ext;

      done(null, newName);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
  //limits: (option) 파일 저장 크기 제한
});

//위와 같은 방식
const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, "uploads/");
  },
  filename(req, file, done) {
    const ext = path.extname(file.originalname);
    const newName = path.basename(file.originalname, ext) + Date.now() + ext;

    done(null, newName);
  },
});
const limits = {
  fileSize: 5 * 1024 * 1024,
};

const uploadDetail2 = multer({ storage: storage, limits: limits });

app.get("/", (req, res) => {
  res.render("index");
});

// app.post("/upload", upload.single("userfile"), (req, res) => {
//   console.log("file:", req.file);
//   console.log("title:", req.body);
// });

// Single
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log("file:", req.file);
  console.log("title:", req.body);
});

//Multiple v1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log("files:", req.files);
  console.log("title:", req.body);
});

//Multiple v2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log("files:", req.files);
    console.log("title:", req.body);
  }
);

// 동적
app.post("/upload/axios", uploadDetail.single("file"), (req, res) => {
  res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
