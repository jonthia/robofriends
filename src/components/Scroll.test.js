import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';

it('expect to render Scroll', () => {

    expect(shallow(<Scroll />)).toMatchSnapshot();

})