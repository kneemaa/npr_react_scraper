const db = require("../models")
const scraper = require("../scraper.js")

module.exports = {
	findAll: function(req,res) {
		db.Articles.find({})
			.sort({date: -1})
			.then(articles => res.json(articles))
			.catch(err => res.status(422).json(err))
	},
	scrape: function(req,res) {
		scraper()
		db.Articles.find({}).sort({date: -1}).then(articles => {
			res.json(articles)
		}).catch(err => {
			console.log(err)
		})
	},
	saveArticle: function(req,res) {
		let id = req.body.id
		db.Articles.update(
			{"_id": id},
			{$set: {saved: true}}
			).catch(err => {
				console.log(err)
			})
	},
	unsaveArticle: function(req,res) {
		let id = req.body.id
		db.Articles.update(
			{"_id": id},
			{$set: {saved: false}}
			).catch(err => {
				console.log(err)
			})
	},
	getSavedArticles: function(req,res) {
		db.Articles.find({saved: true}).populate('notes').then(articles => {
			res.json(articles)
		}).catch(err => {
			console.log(err)
		})
	},
	addNote: function(req,res) {
		db.Notes.create({ 
			body: req.body.note,
		})
		.then(notes => {
			return db.Articles.findOneAndUpdate({ _id: req.params.id}, {$push: {notes: notes._id}}, {new: true})
		}).then( (req,res) => {
			db.Articles.find({saved: true}).populate('notes').then(articles => {
				res.json(articles)
			}).catch(err => {
				console.log(err)
			})
		})
		.catch(err => {
			console.log(err)
		})	
	},
	removeNote: function(req,res) {
		db.Notes.deleteOne({ _id: req.params.id})
			.catch(err => {
				console.log(err)
		})

		db.Articles.find({saved: true}).populate('notes').then(articles => {
			res.json(articles)
		}).catch(err => {
			console.log(err)
		})
	}
}