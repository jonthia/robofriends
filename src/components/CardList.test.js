import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render Card List', () => {

    // needs these mockRobots in order to map
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'John J',
            email: 'john@gmail.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();

})