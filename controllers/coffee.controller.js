const Coffee = require("../Models/Coffee.model")
const Category = require("../Models/Category.model")

module.exports.coffeeController = {
  addCoffee: async (req, res) => {
    try {
      await Coffee.create({
        image: req.body.image,
        name: req.body.name,
        volume: req.body.volume,
        description: req.body.description,
        price: req.body.price,
        categoryId: req.body.categoryId
      })
      res.json("Кофе добавлено")
    } catch (e) {
      res
      .status(400)
      .json({ error: "Ошибка при добавлении: " + e.toString() });
    }
  },
  getCoffee:  async (req, res) => {
    try {
      const coffee = await Coffee.find()
      const category = await Category.find()

      res.json(coffee, category)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString() })
    }
  },

  getCoffeeId: async (req, res) => {
    try {
      const coffee = await Coffee.findById(req.params.id)
      const category = await Category.find();
      res.json(coffee, category)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString()})
    }
  },

  getCoffeeCategory: async (req, res) => {
    try {
      const coffee = await Coffee.find({categoryId: req.params.id})
      const category = await Category.find()
      res.json(coffee, category)
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка: " + e.toString() })
    }
  },
  deleteCoffee: async (req, res) => {
    try {
      await Coffee.findByIdAndRemove(req.params.id)
      res.json("Лекарство удалено")
    } catch (e) {
      res
      .status(400)
      .json({error: "Ошибка при удалении: " + e.toString() })
    }
  },
}