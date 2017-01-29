
const express = require("express")

const router = express.Router()

var result = {
	ipaddress: "",
	language: "",
	software: ""
}


function getSoft(header) {
	var temp = header.substring(0, header.indexOf(")"))

	return temp.substring(header.indexOf("(") + 1) 
}

function getLang (header) {
	return header
					.substring(0, header.indexOf(','))
}

router
	.get("/", (req, res) => {
		res.setHeader("content-type", "application/json")

		result.ipaddress = req.headers["x-forwarded-for"]
		result.software = getSoft(req.headers["user-agent"])
		result.language = getLang(req.headers["accept-language"])
	
		res.send(result)
	})

module.exports = router