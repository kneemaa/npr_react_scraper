import React, { Component } from 'react'
import API from '../../utils/API'

class Home extends Component {
	state = {
		posts: []
	};

	componentDidMount() {
		this.loadArticles()
	};

	loadArticles = () => {
		API.findAll()
			.then(res => 
				this.setState({posts: res.data})
			)
			.then(console.log(this.state))
			.catch(err => console.log(err))
	};

	render() {
		return (
			<div className='wrapper'>
				{this.state.posts ? (
					<div className='all-articles'>
						{this.state.posts.map(post => (
							<div key={post._id} className="card article-card">
								<img src={post.image} alt="" className="card-img-top"></img>
								<div className="card-body">
									<a href={post.url}><p className="card-title">{post.title}</p></a>
									{post.saved ? (
									<a href="" id={post._id} className="unsave btn">Unsave</a>
									) : (
									<a href="" id={post._id} className="save btn">Save for Later</a>
									)}
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="banner home-banner">
						<h1>You have no Scraped Articles, click <a href="/scrape">Scrape</a> to get some articles.</h1>
					</div>
				)}
			</div>
		)
	}
}


export default Home

