/**
 * Filters array of objects by certain date property, between two dates.
 * @param {string} dateProperty Name of property that is type of date string
 * @param {date} startDate Starting date
 * @param {date} endDate Ending date
 * @returns {array}  
 */

utilities.filter('betweenDates', function () {
    return function (items, dateProperty, startDate, endDate) {

        if (startDate == null || endDate == undefined || endDate == null || endDate == undefined) {
            return items;
        }

        var filtered = [];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (item[dateProperty] !== null && item[dateProperty] !== undefined) {

                var itemDateObj = new Date(item[dateProperty]);

                if (itemDateObj >= startDate && itemDateObj <= endDate) {
                    filtered.push(item);
                }
            }
        }
        return filtered;
    }
});