const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports.usersController = {
  //регистрация пользователя
  registration: async (req, res) => {
    const errors = validationResult(req);


    if (!errors.isEmpty()) {
      return res.status(400).json("Ошибка при регистрации (validationResult)");
    }

    const { firstName, lastName, login, password, coffeeId } = req.body;
    try {
      const candidate = await User.findOne({login})
      if(candidate) {
        return res.status(401).json({ error: 'карар яла, логин занят' })
      }
      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const newUser = await User.create({
        firstName,
        lastName,
        login,
        coffeeId,
        password: hash,
      });

      const payload = {
        firstName,
        lastName,
        login
      };
      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h"
      });


      res.status(200).json({ newUser, token });
    } catch (e) {
      res.status(401).json("ошибка при добавлении пользователя");
    }
  },

  //проверка зареган ли пользователь
  login: async (req, res) => {

    const { login, password } = req.body;
    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.status(401).json("Неверный логин");
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json("Неверный пароль");
    }

    const payload = {
      id: candidate._id,
    };
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "24h"
    });

    res.json(token);
  },

//добавление кофе в корзину пользователя

  addCoffeeToCart: async (req, res) => {

    try {
      const { coffeeId } = req.body
      const user = req.user.id

      await User.findByIdAndUpdate(user, {$push: {coffeeId}})
      res.status(200).json("Добавлено в корзину...")


    } catch (e) {
      res.status(401).json("Ошибка при добавлении в корзину пользователя")
    }
  }
};
