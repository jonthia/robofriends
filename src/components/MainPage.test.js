import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(), // don't worry about doing the API call
        robots: [],
        searchField: "",
        isPending: false,
    }
    wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('renders mainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(), // don't worry about doing the API call
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: "john",
        isPending: false,
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>)
    expect(wrapper2.instance().filteredRobots([])).toEqual([{
        id: 3,
        name: 'John',
        email: 'john@gmail.com'
    }])
    const mockProps3 = {
        onRequestRobots: jest.fn(), // don't worry about doing the API call
        robots: [{
            id: 3,
            name: 'John',
            email: 'john@gmail.com'
        }],
        searchField: "a",
        isPending: false,
    }
    const filteredRobots = [];
    const wrapper3 = shallow(<MainPage { ...mockProps3 }/>)
    expect(wrapper3.instance().filteredRobots([])).toEqual(filteredRobots)
})

it('Shows loading... if still pending', () => {
const mockProps4 = {
    onRequestRobots: jest.fn(), // don't worry about doing the API call
    robots: [],
    searchField: "a",
    isPending: true,
}
const wrapper4 = shallow(<MainPage { ...mockProps4 }/>)
expect(wrapper4.contains(<h1 id="loading">Loading...</h1>)).toEqual(true)
})


