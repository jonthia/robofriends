// Import the constants
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

const initialStateSearch = {
    searchField: ''
}

// Reducers receive inputs and act on the state if necessary

// search Robot store
// ES6 default parameters used
export const searchRobots = (state=initialStateSearch, action={}) => {
    // action.type is defined in the actions.js
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            // Return a new state with everything there before plus new searchfield properties (action.payload defined in actions.js)
            return Object.assign({}, state, { searchField: action.payload })
            // alternative syntax
            // return { ...state, {searchField: action.payload} }
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

// RequestRobots
// Updates the store depending on the result of the action
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}