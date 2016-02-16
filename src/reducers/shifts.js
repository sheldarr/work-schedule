import ActionTypes from '../constants/ActionTypes';

const initialState = [];

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.CREATE_SHIFT:
        var ids = state.map(function (shift) {
            return shift.id;
        });
        Object.assign(action.shift, {
            id: state.length ? Math.max(...ids) + 1 : 1
        });
        return [action.shift, ...state];

    case ActionTypes.DELETE_SHIFT:
        var shift = state.find((shift) => {
            return shift.id === action.shiftId;
        });
        var index = state.indexOf(shift);
        return state.slice(0, index).concat(state.slice(index + 1));

    default:
        return state;
    }
};
