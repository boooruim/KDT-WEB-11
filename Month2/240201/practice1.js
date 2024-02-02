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
  res.render("practice1"); //index.ejs
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("practice1_result", {
    title: "GET요청 결과",
    userInfo: req.query,
  });
});

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
