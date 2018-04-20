import React, { Component } from 'react'
import API from '../../utils/API'

class Saved extends Component {

	state = {
		posts: [],
		saved: [],
	};

	componentWillMount() {
		this.getSaved()
	};

/*	setStateAsync(state) {
		return new Promise((resolve) => {
			this.setState(state, resolve)
		})
	}*/

	getSaved = async () => {
		try {
			const savedArticles = await API.getSavedArticle()
			this.setState({saved: savedArticles.data})
		} catch (err) {
			console.log(err)
		}
		console.log(this.state.saved.length)
	}

	render () {
		return (
			<div className="container">
			{this.state.saved.length > 0 ? (
				this.state.saved.map(post => {
					return (
						<div key={post._id} className="card article-card">
							<img src={post.image} alt="" className="card-img-top"></img>
							<div className="card-body">
								<a href={post.url} target="_blank"><p className="card-title">{post.title}</p></a>
								<span className="note-wrapper"><a href="" id={post._id} className="delete btn">Delete</a>
								<a href="" id={post._id} class="note btn">{this.post.notes.length < 0 ? this.post.notes.length : 0} Notes</a></span>
							</div>
						</div>
					/*	{{>modal}}*/)
				})
			) : (
				<div className="banner saved-banner">
					<h1>Go to the <a href="/">Home Page</a> and to save some Articles.</h1>
				</div>
			)
			}
		</div>
			)
	}
}

export default Saved