
const express = require("express")

const router = express.Router()

var getHeaderAsset = __dirname + "/../public/js/getHeaderInfo.js"
var getHeaderInfo = require(getHeaderAsset)

var result = {
	ipaddress: null,
	language: null,
	software: null
}

router
	.get("/", (req, res) => {
		res.setHeader("content-type", "application/json")

		if (req) {
			result.ipaddress = req.headers["x-forwarded-for"]
			result.software = getHeaderInfo.software(req.headers["user-agent"])
			result.language = getHeaderInfo.language(req.headers["accept-language"])
		}
		
		res.send(result)
	})

module.exports = router