const express = require("express")
const logger = require("morgan");
const app = express()
const bodyParser = require("body-parser")
const routes = require('./routes')
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraperdb"
mongoose.Promise = Promise

app.use(logger('dev'))
app.use(express.static("client/build"))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

mongoose.connect(MONGODB_URI)

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})