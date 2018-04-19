const doc = $(document)

doc.on("click",".scrape",function() {
	$.ajax({
		url: '/api/scrape',
		method: 'GET'
	}).done( function(data) {
		return window.location = '/'
	})
	window.location = '/'

})

doc.on('click','.save', function() {

	$.ajax({
		url: '/api/article/add',
		method: 'POST',
		data: {id: this.id}
	}).done( function(data) {})

	location.reload()
})

doc.on('click','.saved-articles', function() {
	window.location = '/saved'
})

doc.on('click','.home', function() {
	window.location = '/'
})

doc.on('click', '.delete', function() {
	$.ajax({
		url: '/api/article/delete',
		method: 'POST',
		data: {id: this.id}
	}).done( function(data) {})
	
	location.reload()
})

doc.on('click','.note', function(event) {
	$(`.modal-${this.id}`).modal('show')
})

doc.on('click', '.save-note', function(event) {
	let id = this.id
	let note = $(`.note-${id}`).val()
	
	$.ajax({
		url: '/api/note/add/' + id,
		method: 'POST',
		data: {
			note: note,
		}
	}).done( function(data) {
	})
	$('.modal').modal('hide')
	$(`.note-${id}`).val('')
	window.location = '/saved'
})

doc.on('click','.delete-note', function() {
	let id = this.id
	$.ajax({
		url: '/api/note/delete/' + id,
		method: 'POST'
	}).done( function(data) {
	})
	$(`p.note-${this.id}`).remove()
})

$(document).on('hidden.bs.modal',".modal", function() {
	window.location = '/saved'
})