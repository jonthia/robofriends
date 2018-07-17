import React, { Component } from 'react'
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';


// Smart component with two states
class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filteredRobots = () => {
        // filter the robots to only include matches based on the rule
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
            })
    }

    render () {
        // destructure this.state.props
        const { onSearchChange, isPending } = this.props;

        return (
        <div className='tc'>
        <Header />
        <SearchBox searchChange={ onSearchChange } />
            <Scroll>
            { isPending ? <h1 id='loading'>Loading...</h1> :
                <ErrorBoundary>
                <CardList robots={ this.filteredRobots() }/>
                </ErrorBoundary>
            }
            </Scroll>
        </div>
        );
    }
}

export default MainPage;