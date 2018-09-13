import React from 'react';
import {shallow} from 'enzyme'; 
import App from '../../app/components/App'
import etj from 'enzyme-to-json';


it('should render correctly with no props', () => {
  const component = shallow(<App/>);
  
  expect(component).toMatchSnapshot();
});

// const wrapper = shallow(<App />);