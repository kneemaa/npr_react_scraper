import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {


	render() {
		return ( 
			<nav class="navbar navbar-light bg-light">
				<div class="button-group">
					<Link to="/"><button type="button" class="home btn btn-caution">Home</button></Link>
					<Link to="/saved"><button type="button" class="saved-articles btn btn-primary">Saved Articles</button></Link>
					<button type="button" class="scrape btn btn-secondary">Scrape</button>
				</div>
			</nav>)
	}
}

export default Navbar