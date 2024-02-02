const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs"); // view engine을 ejs로
// app.set('views', './views'); //없어도 돌아감

//정적 파일 불러오기
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //send() 클라이언트에 응답데이터
  res.send("Hello Express");
});

app.get("/test", (req, res) => {
  res.render("test", { name: "홍길동" });
});

app.get("/gugu", (req, res) => {
  res.render("gugudan", { data: 2, dan: 5, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});
app.get("/fruit", (req, res) => {
  res.render("fruit", {
    fruit: [
      {
        name: "apples",
        kor: "사과",
      },
      {
        name: "bananas",
        kor: "바나나",
      },
      {
        name: "grapes",
        kor: "포도",
      },
      {
        name: "peaches",
        kor: "복숭아",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
