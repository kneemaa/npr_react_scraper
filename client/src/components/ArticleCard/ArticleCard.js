import React from 'react'

const ArticleCard = props => {
	return (
		<div key={props.id} className="card article-card">
			<img src={props.src} alt="" className="card-img-top"></img>
			<div className="card-body">
				<a href={props.href}><p className="card-title">{props.title}</p></a>
				{props.isSaved ? (
				<a href="" id={props.id} onClick={() => props.unsave(props.id)} className="unsave btn">Unsave</a>
				) : (
				<a href="" id={props.id} onClick={() => props.save(props.id)} className="save btn">Save for Later</a>
				)}
			</div>
		</div>
	)}

export default ArticleCard