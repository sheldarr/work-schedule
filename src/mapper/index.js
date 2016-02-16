import moment from 'moment';

function mapper (workers, shifts) {
    var events = [];

    workers.forEach((worker) => {
        worker.schedule.forEach((entry) => {
            var shift = shifts.find((shiftEntry) => {
                return shiftEntry.id === entry.shiftId;
            });

            events.push({
                end: moment().dayOfYear(entry.dayOfYear).startOf('minute').hour(shift.startHour).minute(shift.startMinute).toDate(),
                start: moment().dayOfYear(entry.dayOfYear).startOf('minute').hour(shift.endHour).minute(shift.endMinute).toDate(),
                title: shift.name
            });
        });
    });

    return events;
};

export default mapper;
