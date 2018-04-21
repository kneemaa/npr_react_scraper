import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class NotesModal extends React.Component {
	

	render() {
			console.log(this.props)
			return (
				<div>
		        <Modal show={this.props.show} onHide={this.props.handleClose}>
		          <Modal.Header>
		            <Modal.Title>{this.props.title}</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		            {this.props.notes ? (
		            	this.props.notes.map(note => {
		            		<div>{note.title}</div>
		            	}
		            	)
		            	) : (
		            		<div>No NotesModal</div>
		            	)}
		            	<hr/>
					<Button className="save-note">Save Note</Button>
		          </Modal.Body>
		        </Modal>
		      </div>
		    )
		}
}


export default NotesModal