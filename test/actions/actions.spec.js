const actions = require('../../src/actions');
const ActionTypes = require('../../src/constants/ActionTypes');
const expect = require('expect');

describe('actions', () => {
    it('addWorker should create ADD_WORKER action', () => {
        var worker = {
            id: 1,
            name: 'Name',
            schedule: [{
                dayOfYear: 1,
                shift: 1
            }]
        };

        var action = actions.addWorker(worker);

        expect(action).toEqual({
            worker,
            type: ActionTypes.ADD_WORKER
        });
    });

    it('deleteWorker should create DELETE_WORKER action', () => {
        var worker = {
            id: 1,
            name: 'Name',
            schedule: [{
                dayOfYear: 1,
                shift: 1
            }]
        };

        var action = actions.deleteWorker(worker);

        expect(action).toEqual({
            type: ActionTypes.DELETE_WORKER,
            worker
        });
    });
});