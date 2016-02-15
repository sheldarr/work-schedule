const ActionTypes = require('../constants/ActionTypes');

const initialState = [];

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.ADD_WORKER:
        return [action.worker, ...state];
    case ActionTypes.DELETE_WORKER:
        var index = state.indexOf(action.worker);
        return state.slice(0, index).concat(state.slice(index + 1));
    default:
        return state;
    }
};
