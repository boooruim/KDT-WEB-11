const mysql = require("mysql2/promise");
//mysql연결
const getConn = async () => {
  return await mysql.createConnection({
    host: "localhost",
    user: "xorms86",
    password: "xorms8665!",
    database: "kdt11",
    port: 3306,
  });
};

// conn.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("mysql connect");
// });

//문자열 보간방법
// SELECT * FROM visitor WHERE id=${id}
// 위 단점
//1. sql 인젝션 공격에 취약.
//2. 문자열에 특수문자가 포함될 경우 오류가 발생할 수 있음
//
//

//쿼리문 작성
const allVisitor = async () => {
  const conn = await getConn();
  const query = `SELECT * FROM visitor`;

  const [rows] = await conn.query(query); // 배열로 반환되기 때문에
  await conn.end();
  return rows;
};

const getVisitor = async (id) => {
  const conn = await getConn();

  //   const query = `SELECT * FROM visitor WHERE id = ${id}`;
  //   const [rows] = await conn.query(query);

  const query = "SELECT * FROM visitor WHERE id = ?"; //위 방법보다 보안 유리
  const [rows] = await conn.query(query, [id]);

  await conn.end();

  return rows;
};

const postVisitor = async (data) => {
  const conn = await getConn();
  //   const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
  //   const [result] = await conn.query(query);

  const query = "INSERT INTO visitor (name, comment) VALUES (? , ?)";
  const [result] = await conn.query(query, [data.name, data.comment]);
  await conn.end();
  return result;
};

const patchVisitor = async (data) => {
  const conn = await getConn();
  //   const query = `UPDATE visitor SET name = '${data.name}', comment = '${data.comment}' WHERE id = ${data.id}`;
  //   const [result] = await conn.query(query);

  const query = "UPDATE visitor SET name = ? , comment = ? WHERE id = ?";
  const [result] = await conn.query(query, [data.name, data.comment, data.id]);
  await conn.end();
  return result;
};

//현재 안되는 중
const deleteVisitor = async (id) => {
  const conn = await getConn();
  //   const query = `DELETE visitor WHERE id = ${id} `;
  //   const [result] = await conn.query(query);

  const query = "DELETE FROM visitor WHERE id = ? ";
  const [result] = await conn.query(query, [id]);
  await conn.end();
  return result;
};

module.exports = {
  allVisitor,
  getVisitor,
  postVisitor,
  patchVisitor,
  deleteVisitor,
};
