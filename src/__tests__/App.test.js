// ES6
// import { shallow, mount, render } from 'enzyme';

// ES5
var enzyme = require( "enzyme" ); 

import React from 'react';
// import { App } from "App"; 

describe( "App component", () => {
	it( "should render without throwing error", () => {
		expect( shallow( <App /> ).find( "body" ).exists() ).toBe( true ); 
	})
})