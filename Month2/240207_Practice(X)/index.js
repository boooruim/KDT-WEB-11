const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//view engine
app.set("view engine", "ejs");

const router = require("./routes"); //위와 동일한 결과 'index'라는 단어만은 생략이 가능
app.use("/", router);

//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
