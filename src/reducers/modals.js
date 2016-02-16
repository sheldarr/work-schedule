import ActionTypes from '../constants/ActionTypes';

const initialState = {
    displayCreateWorkerModal: false,
    displayCreateShiftModal: false,
    displayDeleteWorkerModal: false,
    displayDeleteShiftModal: false
};

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.HIDE_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: false});
    case ActionTypes.SHOW_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: true});
    case ActionTypes.HIDE_CREATE_SHIFT_MODAL:
        return Object.assign({}, state, {displayCreateShiftModal: false});
    case ActionTypes.SHOW_CREATE_SHIFT_MODAL:
        return Object.assign({}, state, {displayCreateShiftModal: true});
    default:
        return state;
    }
};
