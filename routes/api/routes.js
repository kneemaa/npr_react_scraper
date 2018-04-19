const router = require('express').Router()
const postController = require('../../controllers/postController.js')

/*const scraper = require("../scraper.js")
const mongoose = require("mongoose")
const Notes = require("../models/notes")
const Articles = require("../models/article")
const db = {
	Notes: Notes,
	Articles: Articles
}*/
/*router.route('/')
	.get(postController.findAll)
	.post()*/
router.get('/', (req,res) => {
	db.Articles.find({}).sort({date: -1}).then(articles => {
		res.render('index', {articles: articles})
	}).catch(err => {
		console.log(err)
		res.render('index')
	})
})

router.get('/api/scrape', (req,res) => {
	scraper()
	db.Articles.find({}).sort({date: -1}).then(articles => {
		res.render('index', {articles: articles})
	}).catch(err => {
		console.log(err)
		res.render('index')
	})
})
router.post('/api/article/add', (req,res) => {
	let id = req.body.id

	db.Articles.update(
		{"_id": id},
		{$set: {saved: true}}
		).catch(err => {
			console.log(err)
		})
})

router.route('/api/article/delete')
	.
router.post('/api/article/delete', (req,res) => {
	let id = req.body.id

	db.Articles.update(
		{"_id": id},
		{$set: {saved: false}}
		).catch(err => {
			console.log(err)
		})

})

router.get('/saved', (req,res) => {

	db.Articles.find({saved: true}).populate('notes').then(articles => {
		res.render('saved', {articles: articles})
	}).catch(err => {
		res.render('saved')
	})

})


router.post('/api/note/add/:id', (req,res) => {

	db.Notes.create({ 
			body: req.body.note,
		})
		.then(notes => {
			return db.Articles.findOneAndUpdate({ _id: req.params.id}, {$push: {notes: notes._id}}, {new: true})
		}).then( (req,res) => {
			db.Articles.find({saved: true}).populate('notes').then(articles => {
				res.render('saved', {articles: articles})
			}).catch(err => {
				res.render('saved')
			})
		})
		.catch(err => {
			console.log(err)
		})
})

router.post('/api/note/delete/:id', (req,res) => {

	db.Notes.deleteOne({ _id: req.params.id})
		.catch(err => {
			console.log(err)
		})

	db.Articles.find({saved: true}).populate('notes').then(articles => {
		res.render('saved', {articles: articles})
	}).catch(err => {
		res.render('saved')
	})
})


module.exports = router
