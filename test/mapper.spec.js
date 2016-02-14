import expect from 'expect';
import mapper from '../src/mapper';
import moment from 'moment';

describe('mapper', () => {
    it('should map schedule', () => {
        var worker = {
            id: 1,
            name: 'Berdor',
            schedule: [{
                dayOfYear: 45,
                shiftId: 1
            }, {
                dayOfYear: 46,
                shiftId: 2
            }, {
                dayOfYear: 47,
                shiftId: 3
            }]
        };

        var shifts = [{
            id: 1,
            name: 'I',
            startHour: 0,
            startMinute: 0,
            endHour: 8,
            endMinute: 0
        }, {
            id: 2,
            name: 'II',
            startHour: 8,
            startMinute: 0,
            endHour: 16,
            endMinute: 0
        }, {
            id: 3,
            name: 'III',
            startHour: 16,
            startMinute: 0,
            endHour: 23,
            endMinute: 59
        }];

        var events = mapper(worker, shifts);

        expect(events).toEqual([{
            end: moment().dayOfYear(worker.schedule[0].dayOfYear).startOf('minute').hour(shifts[0].startHour).minute(shifts[0].startMinute),
            start: moment().dayOfYear(worker.schedule[0].dayOfYear).startOf('minute').hour(shifts[0].endHour).minute(shifts[0].endMinute),
            title: shifts[0].name
        }, {
            end: moment().dayOfYear(worker.schedule[1].dayOfYear).startOf('minute').hour(shifts[1].startHour).minute(shifts[1].startMinute),
            start: moment().dayOfYear(worker.schedule[1].dayOfYear).startOf('minute').hour(shifts[1].endHour).minute(shifts[1].endMinute),
            title: shifts[1].name
        }, {
            end: moment().dayOfYear(worker.schedule[2].dayOfYear).startOf('minute').hour(shifts[2].startHour).minute(shifts[2].startMinute),
            start: moment().dayOfYear(worker.schedule[2].dayOfYear).startOf('minute').hour(shifts[2].endHour).minute(shifts[2].endMinute),
            title: shifts[2].name
        }]);
    });
});
