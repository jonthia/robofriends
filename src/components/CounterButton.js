import React, { Component } from 'react';

class CounterButton extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    // React lifecycle hook that will update the component if this returns true (which is default)
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true
        } else {
            return false
        }
    }

    updateCount = () => {
        this.setState(state => { 
            return {count: this.state.count + 1}
        })
    }

    render() {
        return (
            <button color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton;