let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    let currentDate = current.getDate() + 1;
    let lastDate = last.getDate() + 1;

    const daysInMonth = (32 - new Date(current.getFullYear(), current.getMonth(), 32).getDate());

    return {
        next() {
            if (current.setDate(currentDate) <= last.setDate(lastDate)) {
                if (currentDate > daysInMonth) {
                    currentDate = last.getDate() - 1;
                }
                let weekend = !!(current.toString().includes('Sun') || current.toString().includes('Sat'));
                return {
                    done: false,
                    value: currentDate < 10 ? weekend ? `[0${currentDate++}]` : `0${currentDate++}` : weekend ? `[${currentDate++}]` : `${currentDate++}`
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
};