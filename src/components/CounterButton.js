import React, { Component } from 'react';
// import Adapter from 'enzyme-adapter-react-16';

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    // React lifecycle hook that will update the component if this returns true (which is default)
    // Use it carefully. It can worsen performance as it adds an extra process.
    // Shallow comparison can miss important updates.
    // PureComponent achieves a similar result: only updates when it props change
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true
        } else {
            return false
        }
    }

    updateCount = () => {
        // this way of calling setState ensures you have the latest state before updating it
        this.setState(state => { 
            return {count: this.state.count + 1}
        })
    }

    render() {
        return (
            <button id='counter' color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;