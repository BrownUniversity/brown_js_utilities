'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var moment = require('moment');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);

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
    return moment__default["default"](new Date(date)).format(dateFormats[type]);
}

var timeRegex = /\d\d?([:,]\d\d)?([ap]m)?/gi;
function formatTime(time, militaryTime) {
    var format = militaryTime ? "HH:mm" : "h:mm A";
    return moment__default["default"](time, ["hhmmA", "hmmA", "hhmm A", "hmm A"]).format(format);
}
function formatTimesWithinString(string, militaryTime) {
    return string.replace(timeRegex, function (match) { return formatTime(match, militaryTime); });
}

exports.capitalize = capitalize;
exports.formatTime = formatTime;
exports.formatTimesWithinString = formatTimesWithinString;
exports.settingsDateFormat = settingsDateFormat;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
