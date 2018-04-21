import React from 'react'

const Modal = props => {
	const modal = props.postInfo
	console.log(modal.notes.length)
	return (
	<div className="modal modal-{modal._id}" tabIndex="-1" role="dialog">
		  <div className="modal-dialog" role="document">
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title">{modal.title}</h5>
		      </div>
		      <div className="modal-body">
		        <div className="form-group">
				  <div className="notes-group">
				  {modal.notes.length < 0 ? (
				  	modal.notes.map(note => {
				  		return (
				  			<p className="note-entry note-{modal._id}">{modal.body}
  						  		<span className="note-entry" aria-hidden="true">
  						  			<a href="" id={modal._id} className="delete-note">
  						  				<img className="deleteImg" alt="trashcan icon" src="./images/delete.png"></img>
  					  				</a>
  				  				</span>
  			  				</p>
  			  				)
				  		}
				  	)
				  ) : (
				  	<div>
				  		<h1>no notes</h1>
				  	</div>
				  )}
				  </div>
				  <textarea className="note-{{_id}} form-control" id={modal._id} rows="3"></textarea>
				</div>
		      </div>
		      <div className="modal-footer">
		        <button type="button" id={modal._id} className="save-note btn btn-primary">Save Note</button>
		      </div>
		    </div>
		  </div>
		</div>)
}

export default Modal