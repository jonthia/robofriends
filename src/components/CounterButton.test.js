import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton', () => {
    const mockColor = 'red';
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);
    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 3 });
    expect(wrapper.props().color).toEqual('red');
})

it('expect CounterButton to not re-render if there are no updates', () => {
    const mockProps = { color: 'red' }
    const mockState = { count: 0 }
    const wrapper2 = shallow(<CounterButton { ...mockProps }/>);

    const shouldUpdate = wrapper2.instance().shouldComponentUpdate(mockProps, mockState);
    expect(shouldUpdate).toBe(false);

    wrapper2.find('[id="counter"]').simulate('click');
    const shouldUpdate2 = wrapper2.instance().shouldComponentUpdate(mockProps, mockState);
    expect(shouldUpdate2).toBe(true);
})