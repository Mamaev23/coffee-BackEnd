const User = require("../models/User.model")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")

module.exports.usersController = {
  registration: async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      return res.status(400).json("Ошибка при регистрации (validationResult)")
    }

    const { name, login, password } = req.body
    try {
      const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))
      const user = await User.create({
        name,
        login,
        password: hash
      })
      res.status(200).json(user)
    } catch (e) {
      res.status(401).json("ошибка при добавлении пользователя")
    }
  },
  login: async (req, res) => {
    const {login, password} = req.body
    const candidate = User.findOne({login})
    if(!candidate) {
      return res.status(401).json("Неверный логин")
    }
    const valid = bcrypt.compare(password, candidate.password)
    if(!valid) {
      return res.status(401).json("Неверный пароль")
    }

    const payload = {
      id: candidate._id
    }
    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY)

    res.json(token)
  }
}