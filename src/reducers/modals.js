import ActionTypes from '../constants/ActionTypes';

const initialState = {
    displayCreateWorkerModal: false,
    displayDeleteWorkerModal: false
};

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.HIDE_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: false});
    case ActionTypes.SHOW_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: true});
    default:
        return state;
    }
};
