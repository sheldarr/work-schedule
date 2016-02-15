const redux = require('redux');
const rootReducer = require('../reducers');
const workers = require('../../var/workers');
const shifts = require('../../var/shifts');

var initialState = {
    workers,
    shifts
};

module.exports = redux.createStore(rootReducer, initialState);
