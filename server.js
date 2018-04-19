const express = require("express")
const logger = require("morgan");
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routes = require('./routes')
const PORT = process.env.PORT || 3001

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperdb"
mongoose.Promise = Promise

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("client/build"))

app.use(routes)

mongoose.connect(MONGODB_URI)

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})