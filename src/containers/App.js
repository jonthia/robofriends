import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import '../containers/App.css'; 

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
        // Calls the requestRobots action, which uses a dispatch method
        onRequestRobots: () => dispatch(requestRobots())
    }
}

// Smart component with two states
class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    // Pass onSearchChange to the input, and notifies app when there is a change
    // onSearchChange = (event) => {
    //     // update this.state with what we type
    //     this.setState({ searchfield: event.target.value })
    // }
    // Updates the component using props
    render () {
        // destructure this.state
        const { searchField, onSearchChange, robots, isPending } = this.props;
        // filter the robots to only include matches based on the rule
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
            })
        // same as if robots.length === 0 but using a turnary operator
        return (
        <div className='tc'>
        <Header />
        <SearchBox searchChange={ onSearchChange } />
            <Scroll>
            { isPending ? <h1>Loading...</h1> :
                <ErrorBoundary>
                <CardList robots={ filteredRobots }/>
                </ErrorBoundary>
            }
            </Scroll>
            </div>
        );
    }
}

// connect is a higher order function. It runs first then returns values to app.
// connect accepts 2 parameters, the states and actions to listen to.
// this subscribes app to the redux store and lets it know of any changes.
export default connect(mapStateToProps, mapDispatchToProps)(App);