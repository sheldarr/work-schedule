const redux = require('redux');
const rootReducer = require('../reducers');

var initialState = {
    workers: [],
    shifts: []
};

module.exports = redux.createStore(rootReducer, initialState);
