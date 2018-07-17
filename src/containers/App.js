import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../containers/App.css';
import MainPage from '../components/MainPage';

// Redux Step 1: Import the actions
import { setSearchField, requestRobots } from '../actions';

// naming is up to you but this is industry standard

// Redux Step 2: Get the state from the store (initialState the first time), and continue to listen for updates
// These will be sent to app as props via connect
const mapStateToProps = state => {
    return {
        // prop to be used: comes from state from reducer
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

// Redux Step 3: Actions to listen for via connect and send to reducer
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // Calls the requestRobots action, which uses the dispatch function
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    render () {
        return <MainPage { ...this.props }/>
    }
}

// connect is a higher order function. It runs first then returns values to app.
// connect accepts 2 parameters, the states and actions to listen to.
// this subscribes app to the redux store and lets it know of any changes.
export default connect(mapStateToProps, mapDispatchToProps)(App);