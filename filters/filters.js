utilities.filter('betweenDates', function () {
    return function (items, dateProperty, startDate, endDate) {

        if (startDate == null || endDate == undefined || endDate == null || endDate == undefined) {
            return items;
        }

        var startDateObj = new Date(startDate);
        var endDateObj = new Date(endDate);

        var filtered = [];

        for (var i = 0; i < items.length; i++) {
            var item = items[i];

            if (item[dateProperty] !== null) {

                var itemDateObj = new Date(formatDate(item[dateProperty]));

                if (itemDateObj >= startDateObj && itemDateObj <= endDateObj) {
                    filtered.push(item);
                }
            }
        }
        return filtered;
    }
});


function formatDate(date) {
    if (date != null)
        return new Date(parseInt(date.substr(6)));
}