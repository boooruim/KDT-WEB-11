const express = require("express");
const app = express();
const PORT = 8000;

// 미들웨어
app.set("view engine", "ejs");
app.use(express.json());

//라우터
const router = require("./routes/user");
app.use("/", router);

//404 페이지
app.use("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${8000}`);
});
