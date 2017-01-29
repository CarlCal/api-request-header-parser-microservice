
const bodyParser = require("body-parser")
const express = require("express")

const getHeader = require("./routes/getHeader")

const app = express()

var port = process.env.PORT || 3000

app
	.use(bodyParser.json())
	.use("/api", getHeader)
	.listen(port)