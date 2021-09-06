const Categories = require("../Models/Categories.model");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    try {
      const get = await Categories.find({});
      res.json(get);
    } catch (e) {
      console.log(e);
    }
  },

  addCategories: async (req, res) => {
    try {
      const addCategory = await Categories.create({
        name: req.body.name,
      });
      res.json(addCategory);
    } catch (e) {
      console.log(e);
    }
  },
};
