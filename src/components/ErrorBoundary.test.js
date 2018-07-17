import { shallow, mount, render } from 'enzyme';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

it('expect to render ErrorBoundary', () => {
    expect(shallow(<ErrorBoundary />)).toMatchSnapshot();
})

it('Shows error if there is one', () => {
    const wrapper = shallow(<ErrorBoundary />)
    wrapper.setState({ hasError: true })
    expect(wrapper.contains(<h1>Ooooops. Something went wrong.</h1>)).toEqual(true);
    })