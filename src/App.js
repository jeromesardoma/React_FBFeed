import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Card />
    );
  }
}

class Card extends React.Component {
  constructor( props ) {
    super( props );
      
    this.state = {
      name: "Marshall Mathers",
      datePosted: "3 hrs"
    }
  }

  render () {
    const userName = this.state.name; 
    const datePosted = this.state.datePosted;
    
    const cardStyle = {
      width: 500,
      height: 250,
      border: "1px solid black",
      margin: "0px auto",
      textAlign: "center"
    };
    const topDivStyle = {
      height: 50,
      width: "100%",

    };
    const userPicDivStyle = {
      height: 50,
      width: 50,
      display: "flex"
    };
    const userPicStyle = {
      border: "1px solid black",
      borderRadius: "100%",
      height: 40,
      width: 40,
      margin: "auto"
    };
    const userNameAndTimeDivStyle = {
      display: "flex",
      flexDirection: "column",
      height: 50,
      justifyContent: "left"
    }
    return (
      <div id="card" style={ cardStyle }>
        <div id="topDiv" style={ topDivStyle }>
          <div id="userPicDiv" style={ userPicDivStyle }>
            <div id="userPic" style={ userPicStyle }>
            </div>
          </div>
          <div id="userNameAndTimeDiv" style={ userNameAndTimeDivStyle }>
            <div>
              <h3>{ userName }</h3>
            </div>
            <div>
              <h6>{ datePosted }</h6>
            </div>
          </div>
          <div id="moreOptions">
          </div>
        </div>
        <div id="image">
        </div>
        <div id="reactionDiv">
        </div>
      </div>
    );
  };
};

export default App;
