const ActionTypes = require('../../src/constants/ActionTypes');
const workers = require('../../src/reducers/workers');
const expect = require('expect');

describe('workers reducer', () => {
    it('should handle initial state', () => {
        var workersBefore = undefined;
        var workersAfter = workers(workersBefore, {});

        expect(workersAfter).toEqual([]);
    });

    it('should handle ADD_WORKER', () => {
        var worker = {
            id: 1,
            name: 'Name',
            schedule: [{
                dayOfYear: 1,
                shift: 1
            }]
        };

        var workersBefore = [];
        var workersAfter = workers(workersBefore, {
            worker: worker,
            type: ActionTypes.ADD_WORKER
        });

        expect(workersAfter).toInclude(worker);
    });
});
