const User = require("../")
const register = async (req, res) => {
  res.send("register user");
};

const login = async (req, res) => {
  res.send("loging user");
};

module.exports = { register, login };
