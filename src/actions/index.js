const ActionTypes = require('../constants/ActionTypes');

module.exports = {
    addWorker (worker) {
        return {
            type: ActionTypes.ADD_WORKER,
            worker
        };
    },

    deleteWorker (worker) {
        return {
            type: ActionTypes.DELETE_WORKER,
            worker
        };
    }
};
