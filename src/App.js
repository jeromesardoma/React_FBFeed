import React, { Component } from 'react';
import logo from './logo.svg';
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
  }

  render () {
    const cardStyle = {
      width: 500,
      height: 250,
      border: "1px solid black",
      margin: "0px auto",
      textAlign: "center"
    }
    return (
      <div style={ cardStyle }>
        <h1>Hello world!</h1>
      </div>
    );
  };
}

export default App;
