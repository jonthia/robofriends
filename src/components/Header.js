import React, { Component } from 'react';
import CounterButton from './CounterButton'; 

class Header extends Component {
    // React lifecycle hook that will update the component if this returns true (which is default)
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        return (
            <div>
                <h1>RoboFriends</h1>
                <CounterButton color={'red'} />
            </div>
        );
    }
}

export default Header; 