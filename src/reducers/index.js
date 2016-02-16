const redux = require('redux');
const modals = require('./modals');
const shifts = require('./shifts');
const workers = require('./workers');

module.exports = redux.combineReducers({
    modals, shifts, workers
});
