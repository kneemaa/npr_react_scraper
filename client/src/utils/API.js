import axios from 'axios'

export default {
	findAll: function() {
		return axios.get('/')
	},
	scrape: function() {
		return axios.get('/api/scrape')
	},
	saveArticle: function() {
		return axios.post('/api/article/add')
	},
	unsaveArticle: function() {
		return axios.post('/api/article/delete')
	},
	getSavedArticle: function() {
		return axios.get('/saved')
	},
	addNote: function() {
		return axios.post('/api/note/add/:id')
	},
	removeNote: function() {
		return axios.post('/api/note/delete/:id')
	}
}