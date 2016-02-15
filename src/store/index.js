const redux = require('redux');
const rootReducer = require('../reducers');

var initialState = {
    workers: [{
        id: 1,
        name: 'Berdor',
        schedule: [{
            dayOfYear: 45,
            shiftId: 1
        }, {
            dayOfYear: 46,
            shiftId: 2
        }, {
            dayOfYear: 47,
            shiftId: 3
        }]
    }],
    shifts: [{
        id: 1,
        name: 'I',
        startHour: 0,
        startMinute: 0,
        endHour: 8,
        endMinute: 0
    }, {
        id: 2,
        name: 'II',
        startHour: 8,
        startMinute: 0,
        endHour: 16,
        endMinute: 0
    }, {
        id: 3,
        name: 'III',
        startHour: 16,
        startMinute: 0,
        endHour: 23,
        endMinute: 59
    }]
};

module.exports = redux.createStore(rootReducer, initialState);
