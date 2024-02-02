const express = require("express");
const app = express();
const PORT = 8000;

//body-parser

app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded방식
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index"); //index.ejs
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result", { title: "GET요청 결과", userInfo: req.query });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result", { title: "POST요청 결과", userInfo: req.body });
});
//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
