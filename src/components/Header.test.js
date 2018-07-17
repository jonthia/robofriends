import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from './Header';

it('expect to render Header', () => {

    expect(shallow(<Header />)).toMatchSnapshot();

})

it('expect CounterButton to not re-render if there are no updates', () => {
    const mockProps = {}
    const mockState = {}
    const wrapper = shallow(<Header />);
const shouldUpdate = wrapper.instance().shouldComponentUpdate(mockProps, mockState);
expect(shouldUpdate).toBe(false);
})