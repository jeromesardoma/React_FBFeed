import React from "react";
import Enzyme, { shallow, render, mount, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'; 
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

// Set default serializer for Jest to be from enzyme-to-json
// Produces an easier to read format
expect.addSnapshotSerializer( createSerializer( { mode: "deep" } ) );  

// React 16 Enzyme adapter
Enzyme.configure( { adapter: new Adapter() } ); 

// Define globals to cut down on imports in test files
global.React = React; 
global.shallow = shallow; 
global.render = render;
global.mount = mount;
global.sinon = sinon;