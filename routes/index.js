const { Router } = require("express")

const router = Router()

router.use(require("../routes/cofee.route"))
router.use(require("../routes/user.route"))
router.use(require("../routes/categories.route"))

module.exports = router