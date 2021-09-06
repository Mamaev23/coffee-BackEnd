const { Router } = require("express")
const { coffeeController } = require("../controllers/coffee.controller")

const router = Router()

router.post("/coffee", coffeeController.addCoffee)//работает
router.get("/coffee", coffeeController.getCoffee)//работает
router.get("/category/:id", coffeeController.getCoffeeCategory)//работает
router.get("/coffee/:id", coffeeController.getCoffeeId)//работает
router.delete("/coffee/:id", coffeeController.deleteCoffee)//работает

module.exports = router