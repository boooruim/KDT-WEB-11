//router

const main = (req, res) => {
  res.render("index");
};

const id = "abc";
const password = "123";

const axios = (req, res) => {
  console.log("요청 값:", req.body);

  if (id === req.body.id && password === req.body.password) {
    data = { message: "로그인에 성공하였습니다.", sucess: true };
  } else {
    data = { message: "로그인에 실패하였습니다.", sucess: false };
  }
  res.send(data);
};

module.exports = { main: main, axios };
