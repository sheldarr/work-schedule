const ActionTypes = require('../../src/constants/ActionTypes');
const workers = require('../../src/reducers/workers');
const expect = require('expect');

describe('workers reducer', () => {
    it('should handle initial state', () => {
        var workersBefore = undefined;
        var workersAfter = workers(workersBefore, {});

        expect(workersAfter).toEqual([]);
    });
});
