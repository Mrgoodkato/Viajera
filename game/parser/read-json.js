/**
 * Function to get the string information of a JSON objecto to be parsed into a JS object
 * @param {File} file - JSON file that will be read
 * @returns {String} Text string of the JSON file to be parsed to a JS object format
 */
export function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};