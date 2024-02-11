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
  res.render("practice1");
});

app.get("/axios", (req, res) => {
  // console.log("요청 값:", req.query);
  res.send(req.query);
});
//서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
