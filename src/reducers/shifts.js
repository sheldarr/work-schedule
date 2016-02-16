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

    default:
        return state;
    }
};
