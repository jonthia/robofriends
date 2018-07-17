import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants.js';

import * as actions from './actions';
// import { apiCall } from './api/api' ;
// import nock from 'nock';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


 // Create a fake store that uses the thunk middleware so it waits for functions that are returned from actions
 const mockStore = configureStore([thunk])

 it('should create an action to search robots', () => {
     const text = 'wooo';
     const expectedAction = {
         type: CHANGE_SEARCH_FIELD,
         payload: text
     };

     expect(actions.setSearchField(text)).toEqual(expectedAction)
 })

 // Create a mock store
 const store = mockStore();

 it('handles REQUEST_ROBOTS_PENDING', () => {

    // dispatch gets sent to automatically request robots
    store.dispatch(actions.requestRobots())
    // receive the actions from the mock store
    const action = store.getActions();

    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction)

 })

 const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
        'Content-type': 'application/json'
      }
    });
};

const mockData = [{
    id: 123,
    name: "test",
    email: "test@gmail.com"
}];

const jsonMockData = JSON.stringify(mockData);

 it('handles RQUEST_ROBOTS_SUCCESS', () => {

    window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve(mockResponse(200, null, jsonMockData)))

    return store.dispatch(actions.requestRobots())
    .then(() => {
      const expectedActions = store.getActions();
      expect(expectedActions.length).toBe(3);
      expect(expectedActions).toContainEqual({type: REQUEST_ROBOTS_PENDING});
      expect(expectedActions).toContainEqual({type: REQUEST_ROBOTS_SUCCESS, payload: mockData });
    })
 })

const mockDataFail = {"status":400, "statusText": "Test Error!"}

const jsonMockDataFail = JSON.stringify(mockDataFail);

it('handles REQUEST_ROBOTS_FAILED', () => {

window.fetch = jest.fn().mockImplementation(() =>
Promise.reject(mockResponse(400, 'Oh no!', jsonMockDataFail)));

return store.dispatch(actions.requestRobots())
.then(() => {
    const expectedActions = store.getActions();
    expect(expectedActions).toContainEqual({type: REQUEST_ROBOTS_PENDING});
    expect(expectedActions[4]).toMatchObject({type: REQUEST_ROBOTS_FAILED});
})
})