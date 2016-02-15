const redux = require('redux');
const workers = require('./workers');
const shifts = require('./shifts');

module.exports = redux.combineReducers({
    workers, shifts
});
