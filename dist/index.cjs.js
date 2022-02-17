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

function adjustColor(colorValue, changeAmount) {
    var _a;
    if (changeAmount === void 0) { changeAmount = -20; }
    var color = colorValue.replace(/^#/, "");
    var changePercent = changeAmount / 100;
    if (color.length === 3)
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    // @ts-ignore
    var _b = color.match(/.{2}/g), r = _b[0], g = _b[1], b = _b[2];
    _a = [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)], r = _a[0], g = _a[1], b = _a[2];
    r = Math.max(Math.min(255, Math.round(r + r * changePercent)), 0).toString(16);
    g = Math.max(Math.min(255, Math.round(g + g * changePercent)), 0).toString(16);
    b = Math.max(Math.min(255, Math.round(b + b * changePercent)), 0).toString(16);
    var rr = (r.length < 2 ? "0" : "") + r;
    var gg = (g.length < 2 ? "0" : "") + g;
    var bb = (b.length < 2 ? "0" : "") + b;
    return "#" + rr + gg + bb;
}

exports.adjustColor = adjustColor;
exports.capitalize = capitalize;
exports.formatTime = formatTime;
exports.formatTimesWithinString = formatTimesWithinString;
exports.settingsDateFormat = settingsDateFormat;
exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
