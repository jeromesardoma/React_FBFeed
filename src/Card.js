import React, { Component } from 'react';
import { styles } from './styles';
import './card.css'; 

class Card extends React.Component {
	constructor( props ) {
		super( props );
		  
		this.state = {
			name: "Marshall Mathers",
			datePosted: "3 hrs",
			likes: 0,
			comments: 0,
			shares: 0
		};
		
		this.addLike = this.addLike.bind( this );
		this.unlike = this.unlike.bind( this );
		this.addComment = this.addComment.bind( this );
		this.uncomment = this.uncomment.bind( this );
		this.addShare = this.addShare.bind( this );
		this.unshare = this.unshare.bind( this );
	}
	
	// Card methods
	
	addLike () {
		this.setState({
			likes: this.state.likes + 1
		})
	};
	
	unlike () {
		this.setState({
			likes: this.state.likes -1
		})
	}
	
	addComment () {
		this.setState({
			comments: this.state.comments + 1
		})
	};
	
	uncomment () {
		this.setState({
			comments: this.state.comments - 1
		})
	}
	
	addShare () {
		this.setState({
			shares: this.state.shares + 1
		})
	}
	
	unshare () {
		this.setState({
			shares: this.state.shares - 1
		})
	}
	
	render () {
		const userName = this.state.name; 
		const datePosted = this.state.datePosted;
		const likes = this.state.likes;
		const comments = this.state.comments;
		const shares = this.state.shares;
		
		function showReactions () {
			if( likes === 0 && comments === 0 && shares === 0 ) {
				return '';
			} 
			return [likes, comments, shares].filter( e => e > 0 ).map(
				e => e + e.toString()
			)
		}
    
		return (
			<div id="card" style={ styles.cardStyle }>
				<div id="topDiv" style={ styles.topDivStyle }>
					<div id="userPicDiv" style={ styles.userPicDivStyle }>
						<div id="userPic" style={ styles.userPicStyle }>
					</div>
				</div>
				<div id="userNameAndTimeDiv" style={ styles.userNameAndTimeDivStyle }>
					<div style={{ textAlign: "left" }}>
						<span>{ userName }</span>
					</div>
						<div style={{ textAlign: "left" }}>
							<span style={{ fontSize: "0.6em" }}>{ datePosted }</span>
						</div>
					</div>
				</div>
				<div id="image">
					<div style={{ height: 315, width: 600, border: "1px solid black", margin: "5px auto 10px auto" }}>
					</div>
				</div>
				<hr style={{ margin: "0px 10px" }} />
				<div id="reactionDiv" style={ styles.reactionDivStyle }>
					<button id="like" onClick={ this.addLike } style={{ padding: "5px 10px" }}>
						Like
					</button>
					<button id="comment" onClick={ this.addComment } style={{ padding: "10px 5px" }}>
						Comment
					</button>
					<button id="share" onClick={ this.addShare } style={{ padding: 10 }}>
						<span>Share</span>
					</button>
					<div id="reactionCounter" style={ styles.reactionCounterStyle }>
						<span>{ showReactions() }</span>
					</div>
				</div>
			</div>
		);
	};
};
  
export default Card;

