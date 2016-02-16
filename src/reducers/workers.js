import ActionTypes from '../constants/ActionTypes';

const initialState = [];

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.CREATE_WORKER:
        var ids = state.map(function (worker) {
            return worker.id;
        });
        Object.assign(action.worker, {
            id: state.length ? Math.max(...ids) + 1 : 1
        });
        return [action.worker, ...state];

    case ActionTypes.DELETE_WORKER:
        var worker = state.find((worker) => {
            return worker.id === action.workerId;
        });
        var index = state.indexOf(worker);
        return state.slice(0, index).concat(state.slice(index + 1));

    default:
        return state;
    }
};
