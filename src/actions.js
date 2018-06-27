// Import the constants
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js'

// action to change searchfield that receives user's input
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

// thunk middleware detects if any action returns a function (below) rather than an object (above)
// higher order function which uses dispatch method
// fetches the data and dispatches the payload according to the result
export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    // AJAX call using fetch API  to request a JSON object
    fetch('https://jsonplaceholder.typicode.com/users')
    // We get a promise convert the JSON data back to a JS string
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}