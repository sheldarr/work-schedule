const ActionTypes = require('../../src/constants/ActionTypes');
const workers = require('../../src/reducers/workers');
const expect = require('expect');

describe('workers reducer', () => {
    it('should handle initial state', () => {
        var workersAfter = workers(undefined, {});

        expect(workersAfter).toEqual([]);
    });

    it('should handle CREATE_WORKER', () => {
        var worker = {
            name: 'Name',
            schedule: [{
                dayOfYear: 1,
                shift: 1
            }]
        };

        var workersBefore = [];
        var workersAfter = workers(workersBefore, {
            worker,
            type: ActionTypes.CREATE_WORKER
        });

        expect(workersAfter).toInclude(worker);
        expect(workersAfter[0].id).toEqual(1);
    });

    it('should handle DELETE_WORKER', () => {
        var worker = {
            id: 1,
            name: 'Name',
            schedule: [{
                dayOfYear: 1,
                shift: 1
            }]
        };

        var workerId = 1;

        var workersBefore = [worker];
        var workersAfter = workers(workersBefore, {
            workerId,
            type: ActionTypes.DELETE_WORKER
        });

        expect(workersAfter).toExclude(worker);
    });
});
