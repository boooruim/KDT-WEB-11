const Visitor = require("../model/Visitor");

//전체 방명록 조회
const allVisitor = async (req, res) => {
  const data = await Visitor.allVisitor();
  console.log(data);
  // Visitor.allVisitor();
  res.json({ result: data });
};

//하나 방명록 조히
const getVisitor = async (req, res) => {
  console.log(req.params.id); //:id 가져오는
  const data = await Visitor.getVisitor(req.params.id); //model에 있는 getVisitor임. 같은거 아님
  console.log(data);
  res.json({ result: data });
};

// 방명혹 하나 작성
const postVisitor = async (req, res) => {
  console.log(req.body);
  const data = await Visitor.postVisitor(req.body);
  res.json({
    result: true,
    id: data.insertId,
    name: req.body.name,
    comment: req.body.comment,
  });
};

// 방명록 하나 수정

const patchVisitor = async (req, res) => {
  const data = await Visitor.patchVisitor(req.body);
  console.log(data); //수정은 따로받을게 없음
  res.json({ result: true });
};

//방명록 하나 삭제

const deleteVisitor = async (req, res) => {
  await Visitor.deleteVisitor(req.body.id);

  res.json({ result: true });
};
module.exports = {
  allVisitor,
  getVisitor,
  postVisitor,
  patchVisitor,
  deleteVisitor,
};
