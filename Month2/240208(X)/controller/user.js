const Users = require("../model/user");

const main = (req, res) => {
  res.render("index"), { users: Users };
};

const register = (req, res) => {
  const { name, gender, major } = req.body;

  Users.push({
    id: Users.length + 1,
    name: Users.name,
    major: Users.major,
  });
  res.send();
};

module.exports = { main, register };
