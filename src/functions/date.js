/**
 * Function that returns formatted date that is provided in format /Date 3921080148021/
 * @param {date} date
 * @returns {date} 
 */
function formatDate(date) {
    if (date != null)
        return new Date(parseInt(date.substr(6)));
}