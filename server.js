
const bodyParser = require("body-parser")
const express = require("express")

const api = require("./routes/api")
const index = require("./routes/index")

const app = express()

var port = process.env.PORT || 3000

app
	.use(bodyParser.json())
	.use("/", index)
	.use("/api", api)
	.listen(port)