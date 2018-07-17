import React from 'react';
import ReactDOM from 'react-dom';
// the connect component removes the need to subscribe, a feature for components to listen for changes
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';
// import connectAdvanced from 'react-redux/lib/components/connectAdvanced';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots })

// Store which uses reducers to create the object tree ie our state
// usually is rootReducer but for this app we only have one at the moment
const store = createStore(rootReducer, applyMiddleware(thunk, logger))
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
// instead of passing the store down level by level as a prop like <App store={store}/>, we can do this:
// Wrapping it in the provider tag passes it all the way down to the bottom
<Provider store={store}><App /></Provider>
, document.getElementById('root'));
registerServiceWorker();