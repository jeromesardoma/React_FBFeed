import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe( "App component", () => {
	it( "renders a div", () => {
		expect( shallow( <App /> ).find( "div" ).exists() ).toBe( true ); 
	})
})