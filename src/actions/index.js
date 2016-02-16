const ActionTypes = require('../constants/ActionTypes');

module.exports = {
    createWorker (worker) {
        return {
            type: ActionTypes.CREATE_WORKER,
            worker
        };
    },

    deleteWorker (worker) {
        return {
            type: ActionTypes.DELETE_WORKER,
            worker
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
    }
};
