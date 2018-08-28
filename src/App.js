import React, { Component } from 'react';
import './App.css';
import { styles } from './styles'

class App extends Component {
	render() {
		return (
			<Card />
		);
	};
};

class Card extends React.Component {
	constructor( props ) {
		super( props );
		  
		this.state = {
			name: "Marshall Mathers",
			datePosted: "3 hrs"
		};
	}

	render () {
		const userName = this.state.name; 
		const datePosted = this.state.datePosted;
    
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
					<div style={{ padding: "5px 10px" }}>
						<span>Like</span>
					</div>
					<div style={{ padding: "10px 5px" }}>
						<span>Comment</span>
					</div>
					<div style={{ padding: 10 }}>
						<span>Share</span>
					</div>
				</div>
			</div>
		);
	};
};
  
export default App;

