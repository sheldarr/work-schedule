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

    case ActionTypes.DELETE_SHIFT_LINK:
        worker = state.find((worker) => {
            return worker.id === action.workerId;
        });
        var shiftLink = worker.schedule.find((link) => {
            return link.dayOfYear === action.dayOfYear;
        });
        index = worker.schedule.indexOf(shiftLink);
        worker.schedule = worker.schedule.slice(0, index).concat(worker.schedule.slice(index + 1));
        return [worker, ...state];

    default:
        return state;
    }
};
