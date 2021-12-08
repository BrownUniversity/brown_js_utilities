import moment from 'moment';

var toKebabCase = function (str) {
    // @ts-ignore: Object is possibly 'null'
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(function (x) { return x.toLowerCase(); })
        .join("-");
};
var toCamelCase = function (str) {
    return str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, function (m, chr) { return chr.toUpperCase(); });
};
var capitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

function settingsDateFormat(date, type) {
    var dateFormats = {
        us: "M/D/YYYY",
        eu: "DD-MMM-YYYY",
        int: "YYYY/MM/DD"
    };
    return moment(new Date(date)).format(dateFormats[type]);
}

var timeRegex = /\d\d?([:,]\d\d)?([ap]m)?/gi;
function formatTime(time, militaryTime) {
    var format = militaryTime ? "HH:mm" : "h:mm A";
    return moment(time, ["hhmmA", "hmmA", "hhmm A", "hmm A"]).format(format);
}
function formatTimesWithinString(string, militaryTime) {
    return string.replace(timeRegex, function (match) { return formatTime(match, militaryTime); });
}

export { capitalize, formatTime, formatTimesWithinString, settingsDateFormat, toCamelCase, toKebabCase };
