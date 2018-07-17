import { shallow, mount, render } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

it('expect to render SearchBox', () => {

    expect(shallow(<SearchBox />)).toMatchSnapshot();

})