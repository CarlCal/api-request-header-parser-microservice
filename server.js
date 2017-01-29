
const bodyParser = require("body-parser")
const express = require("express")

const app = express()

var port = process.env.PORT || 3000

var result = {
	ipaddress: "",
	language: "",
	software: ""
}

function getLang(header) {
	return header
					.substring(0, header.indexOf(','))
}

app
	.use(bodyParser.json())
	.get("/", (req, res) => {
		//res.setHeader("content-type", "application/json")

		result.language = getLang(req.headers["accept-language"])
												

		result.software = req.headers["user-agent"]

		result.ipaddress = req.headers["x-forwarded-for"]

		res.send(result)
	})
	.listen(port)