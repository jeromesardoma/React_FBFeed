// ES6

// import { configure } from "enzyme";
// import Adapter from 'enzyme-adapter-react-16'; 

// ES5

var enzyme = require( "enzyme" ); 
var Adapter = require( "enzyme-adapter-react-16" ); 

enzyme.configure( { adapter: new Adapter() } ); 