const { Router } = require("express")

const router = Router()

router.use("/", require("../routes/cofee.route"))

module.exports = router