import ActionTypes from '../constants/ActionTypes';

const initialState = {
    displayCreateWorkerModal: false,
    displayCreateShiftModal: false,
    displayDeleteWorkerModal: false,
    displayDeleteShiftModal: false,
    displayLinkShiftModal: false,
    displayDeleteShiftLinkModal: false,
    objectToDeleteId: 0,
    objectToDeleteName: ''
};

module.exports = (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.HIDE_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: false});
    case ActionTypes.SHOW_CREATE_WORKER_MODAL:
        return Object.assign({}, state, {displayCreateWorkerModal: true});
    case ActionTypes.HIDE_DELETE_WORKER_MODAL:
        return Object.assign({}, state, {
            displayDeleteWorkerModal: false,
            objectToDeleteId: 0,
            objectToDeleteName: ''
        });
    case ActionTypes.SHOW_DELETE_WORKER_MODAL:
        return Object.assign({}, state, {
            displayDeleteWorkerModal: true,
            objectToDeleteId: action.objectId,
            objectToDeleteName: action.objectName
        });
    case ActionTypes.HIDE_CREATE_SHIFT_MODAL:
        return Object.assign({}, state, {displayCreateShiftModal: false});
    case ActionTypes.SHOW_CREATE_SHIFT_MODAL:
        return Object.assign({}, state, {displayCreateShiftModal: true});
    case ActionTypes.HIDE_DELETE_SHIFT_MODAL:
        return Object.assign({}, state, {
            displayDeleteShiftModal: false,
            objectToDeleteId: 0,
            objectToDeleteName: ''
        });
    case ActionTypes.SHOW_DELETE_SHIFT_MODAL:
        return Object.assign({}, state, {
            displayDeleteShiftModal: true,
            objectToDeleteId: action.objectId,
            objectToDeleteName: action.objectName
        });
    case ActionTypes.HIDE_LINK_SHIFT_MODAL:
        return Object.assign({}, state, {displayLinkShiftModal: false});
    case ActionTypes.SHOW_LINK_SHIFT_MODAL:
        return Object.assign({}, state, {displayLinkShiftModal: true});
    case ActionTypes.HIDE_DELETE_SHIFT_LINK_MODAL:
        return Object.assign({}, state, {
            displayDeleteShiftLinkModal: false,
            objectToDeleteId: 0
        });
    case ActionTypes.SHOW_DELETE_SHIFT_LINK_MODAL:
        return Object.assign({}, state, {
            displayDeleteShiftLinkModal: true,
            objectToDeleteId: action.dayOfYear,
            objectToDeleteName: `day ${action.dayOfYear} shift`
        });
    default:
        return state;
    }
};
