const { Router } = require("express")
const { coffeeController } = require("../controllers/coffee.controller")

const router = Router()

router.post("/", coffeeController.addCoffee)
router.get("/", coffeeController.getCoffee)
router.get("/category/:id", coffeeController.getCoffeeCategory)
router.get("/:id", coffeeController.getCoffeeId)
router.delete("/:id", coffeeController.deleteCoffee)

module.exports = router