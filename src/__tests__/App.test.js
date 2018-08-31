//import React from 'react';
//import { shallow } from 'enzyme';
// no need to import the above, as this is configured in setupTests.js

import App from '../App';

describe( "App component", () => {
	it( "renders a div", () => {
		expect( shallow( <App /> ).find( "div" ).exists() ).toBe( true ); 
	})
})