
const express = require("express")

const staticAssets = __dirname + "/../public"

const router = express.Router()

router
	.use(express.static(staticAssets))

module.exports = router