// require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");

// const router = require("./routes/index");
const router = require("./routes"); //위와 동일한 결과 'index'라는 단어만은 생략이 가능
app.use("/", router);

//밑에 두줄은 user파트 부분만 관련
const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
