const express = require("express");
const app = express();
const PORT = 8000;

//body-parser

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("practice2");
});

const id = "abc";
const password = "123";

app.post("/axios", (req, res) => {
  console.log("요청 값:", req.body);

  if (id === req.body.id && password === req.body.password) {
    data = { message: "로그인에 성공하였습니다.", sucess: true };
  } else {
    data = { message: "로그인에 실패하였습니다.", sucess: false };
  }
  res.send(data);
});

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
