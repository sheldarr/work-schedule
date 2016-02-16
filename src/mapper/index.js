import moment from 'moment';

const mapper = {
    mapWorker (worker, shifts) {
        var events = [];

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

        return events;
    },

    mapWorkers (workers, shifts) {
        var events = [];

        workers.forEach((worker) => {
            worker.schedule.forEach((entry) => {
                var shift = shifts.find((shiftEntry) => {
                    return shiftEntry.id === entry.shiftId;
                });

                events.push({
                    end: moment().dayOfYear(entry.dayOfYear).startOf('minute').hour(shift.startHour).minute(shift.startMinute).toDate(),
                    start: moment().dayOfYear(entry.dayOfYear).startOf('minute').hour(shift.endHour).minute(shift.endMinute).toDate(),
                    title: `${shift.name} - ${worker.name}`
                });
            });
        });

        return events;
    }
};

export default mapper;
