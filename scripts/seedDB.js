const mongoose = require('mongoose')
const db = require('../models')
mongoose.Promise = global.Promise

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/imgurdb",
  {
    useMongoClient: true
  }
)

const imgurSeed = [
	{
		title: 'title',
		image: 'image',
		something: 'something',
		date: new Date(Date.now())
	},
	{
		title: 'title',
		image: 'image',
		something: 'something',
		date: new Date(Date.now())
	}
]

db.Article.remove({})
		.then(() => db.Article.collection.insertMany(imgurSeed))
		.then(data => {
			console.log(data.insertedIds.length + " records inserted")
			process.exit(0)
		})
		.catch(err => {
			console.error(err)
			process.exit(1)
		})
})