const router = require('express').Router()

// connect your API routes here!
router.use("/players", require("./playerRouter"))
router.use("/games", require("./gameRouter"))

module.exports = router
