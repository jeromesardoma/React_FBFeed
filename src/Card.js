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
			liked: false,
			comments: 0,
			commented: false,
			shares: 0,
			shared: false
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
			likes: this.state.likes + 1,
			liked: true
		})
	};
	
	unlike () {
		this.setState({
			likes: this.state.likes -1,
			liked: false
		})
	}
	
	addComment () {
		this.setState({
			comments: this.state.comments + 1,
			commented: true
		})
	};
	
	uncomment () {
		this.setState({
			comments: this.state.comments - 1,
			commented: false
		})
	}
	
	addShare () {
		this.setState({
			shares: this.state.shares + 1,
			shared: true
		})
	}
	
	unshare () {
		this.setState({
			shares: this.state.shares - 1,
			shared: false
		})
	}
	
	render () {
		const userName = this.state.name; 
		const datePosted = this.state.datePosted;
		const likes = this.state.likes;
		const liked = this.state.liked;
		const comments = this.state.comments;
		const commented = this.state.commented;
		const shares = this.state.shares;
		const shared = this.state.shared;
		
		function showReactions () {
			const reactions = {
				"likes": likes,
				"comments": comments,
				"shares": shares
			};
			let result = [];
			
			// show reactions in lower right corner of card, only if there are non
			// zero reactions tracked
			for ( let k in reactions ) {
				if ( reactions[k] > 0 ) {
					// show singular reaction name if there is only one reaction tracked
					if ( reactions[k] === 1 ) {
						result.push( reactions[k] + " " + k.slice(0, -1) );
					// else, give plural form of reaction for more than one reaction
					} else {
						result.push( reactions[k] + " " + k );
					}
				}
			}
			
			// if there's more than one reaction tracked, join the array with a space, else
			// just show the singular reaction
			return result.length > 1 ? result.join(" ") : result;
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
					<div id="like" className={ liked ? "reactionClicked" : '' } onClick={ liked ? this.unlike : this.addLike } style={ styles.likeNotClickedStyle }>
						Like
					</div>
					<div id="comment" className={ commented ? "reactionClicked" : '' } onClick={ commented ? this.uncomment : this.addComment } style={ styles.commentNotClickedStyle }>
						Comment
					</div>
					<div id="share" className={ shared ? "reactionClicked" : '' } onClick={ shared ? this.unshare : this.addShare } style={ styles.shareNotClickedStyle }>
						<span>Share</span>
					</div>
					<div id="reactionCounter" style={ styles.reactionCounterStyle }>
						<span>{ showReactions() }</span>
					</div>
				</div>
			</div>
		);
	};
};
  
export default Card;

