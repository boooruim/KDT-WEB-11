const express = require("express");
const app = express();
const PORT = 8000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/submit", (req, res) => {
  res.render("submit");
});

app.get("/function", (req, res) => {
  res.render("function");
});
/*
render()
send()
json()
redirect()
*/

// 요청과 응답
app.get("/ajax", (req, res) => {
  console.log("요청 값:", req.query);
  const { name, email } = req.query;

  //프론트로 보내는 데이터
  res.send({ result: true, name: `${name}님`, email: `주소: ${email}` });
});

app.post("/ajax", (req, res) => {
  console.log("요청 값:", req.body);
  const { name, email } = req.body;

  //프론트로 보내는 데이터
  res.send({ result: true, username: name, email }); // email: email이면 email로만 적어도 됨
});

//Axios
app.get("/axios", (req, res) => {
  console.log("요청 값:", req.query);
  res.send(req.query);
});

app.post("/axios", (req, res) => {
  console.log("요청 값:", req.body);
  const { username, email } = req.body;

  const data = {
    name: `하이 ${username}!`,
    address: `주소는 ${email}`,
  };
  res.send(data);
});

//Fetch
app.get("/fetch", (req, res) => {
  console.log("요청값", req.query);
  res.send(req.query);
});

app.post("/fetch", (req, res) => {
  console.log("요청값", req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
