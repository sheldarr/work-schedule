const ActionTypes = require('../constants/ActionTypes');

module.exports = {
    createWorker (worker) {
        return {
            type: ActionTypes.CREATE_WORKER,
            worker
        };
    },

    createShift (shift) {
        return {
            type: ActionTypes.CREATE_SHIFT,
            shift
        };
    },

    deleteShift (shiftId) {
        return {
            type: ActionTypes.DELETE_SHIFT,
            shiftId
        };
    },

    deleteWorker (workerId) {
        return {
            type: ActionTypes.DELETE_WORKER,
            workerId
        };
    },

    hideCreateWorkerModal () {
        return {
            type: ActionTypes.HIDE_CREATE_WORKER_MODAL
        };
    },

    showCreateWorkerModal () {
        return {
            type: ActionTypes.SHOW_CREATE_WORKER_MODAL
        };
    },

    hideCreateShiftModal () {
        return {
            type: ActionTypes.HIDE_CREATE_SHIFT_MODAL
        };
    },

    showCreateShiftModal () {
        return {
            type: ActionTypes.SHOW_CREATE_SHIFT_MODAL
        };
    },

    hideDeleteWorkerModal () {
        return {
            type: ActionTypes.HIDE_DELETE_WORKER_MODAL
        };
    },

    showDeleteWorkerModal (objectId, objectName) {
        return {
            objectId,
            objectName,
            type: ActionTypes.SHOW_DELETE_WORKER_MODAL
        };
    },

    hideDeleteShiftModal () {
        return {
            type: ActionTypes.HIDE_DELETE_SHIFT_MODAL
        };
    },

    showDeleteShiftModal (objectId, objectName) {
        return {
            objectId,
            objectName,
            type: ActionTypes.SHOW_DELETE_SHIFT_MODAL
        };
    },

    hideLinkShiftModal () {
        return {
            type: ActionTypes.HIDE_LINK_SHIFT_MODAL
        };
    },

    showLinkShiftModal () {
        return {
            type: ActionTypes.SHOW_LINK_SHIFT_MODAL
        };
    },

    hideDeleteShiftLinkModal () {
        return {
            type: ActionTypes.HIDE_DELETE_SHIFT_LINK_MODAL
        };
    },

    showDeleteShiftLinkModal (dayOfYear) {
        return {
            dayOfYear,
            type: ActionTypes.SHOW_DELETE_SHIFT_LINK_MODAL
        };
    },

    deleteShiftLink (workerId, dayOfYear) {
        return {
            dayOfYear,
            type: ActionTypes.DELETE_SHIFT_LINK,
            workerId
        };
    }
};
