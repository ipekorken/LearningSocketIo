const User = require('../models/userModel');
var createError = require('http-errors');
const bcrypt = require('bcrypt');

const listAllUsers = async (req, res) => {
  const data = await User.find({});
  res.json({ data });
};

const getUserInfo = (req, res, next) => {
  res.json(req.user);
};

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    newUser.password = await bcrypt.hash(newUser.password, 10);
    const { error, value } = newUser.joiValidation(req.body);
    if (error) {
      next(createError(400, error));
    } else {
      const result = await newUser.save();
      res.json(result);
    }
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.beLogin(req.body.email, req.body.password);
    const token = await user.generateToken();
    res.json({ user, token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listAllUsers,
  getUserInfo,
  register,
  login,
};
