import axios from 'axios'

export default {
	findAll: function() {
		return axios.get('/api/getAll')
	},
	scrape: function() {
		return axios.get('/api/scrape')
	},
	saveArticle: function(id) {
		return axios.post('/api/article/add/' + id)
	},
	unsaveArticle: function(id) {
		return axios.post('/api/article/delete/' + id)
	},
	getSavedArticle: function() {
		return axios.get('/api/getSaved')
	},
	addNote: function(id) {
		return axios.post('/api/note/add/'+ id)
	},
	removeNote: function(id) {
		return axios.post('/api/note/delete/'+ id)
	}
}