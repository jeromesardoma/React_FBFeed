// works only with ES5 for now
// const sum = require( './sum' );
import { sum } from './sum';

test( "add 1 + 2 equals 3", () => {
	expect( sum( 1, 2 ) ).toBe(3); 
})