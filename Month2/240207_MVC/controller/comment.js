//DB
const commentsModel = require("../model/comment");

// ======== 첫 번째 방법
// exports.main = (req, res) => {
//   //main이란 이름은 달라져도됨
//   res.render("index");
// };

// exports.comments = (req, res) => {
//   //comments이란 이름은 달라져도됨
//   res.render("comments", { list: commentsModel });
// };

// exports.comment = (req, res) => {
//   //comment이란 이름은 달라져도됨
//   console.log(req.params);
//   console.log(req.params.page);
//   console.log(typeof req.params.page);
//   const page = Number(req.params.page);
//   res.render("comment", { data: commentsModel[page - 1] });
// };

// ======== 두 번째 방법

const main = (req, res) => {
  //main이란 이름은 달라져도됨
  res.render("index");
};

const comments = (req, res) => {
  //comments이란 이름은 달라져도됨
  res.render("comments", { list: commentsModel });
};

const comment = (req, res) => {
  //comment이란 이름은 달라져도됨
  console.log(req.params);
  console.log(req.params.page);
  console.log(typeof req.params.page);
  const page = Number(req.params.page);
  res.render("comment", { data: commentsModel[page - 1] });
};

module.exports = { main: main, comments, comment };
