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
  res.render("practice2"); //index.ejs
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("practice2_result", {
    title: "POST요청 결과",
    userInfo: req.body,
  });
});

// 404 ejs 만들고 나서 해야 함.
// use는 http 전송방식을 이해하지 못함
// 같은 rounter(url)로 get, post를 만들 수 잇지만 use로는 접근이 불가
// 예를 들어 get 방식의 '/login'과 post방식의 '/login'은 다른 통신이지만
// use는 동일한 페이지로 인식
// app.use('*',(req,res) => {
//   res.render('404')
// })

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
