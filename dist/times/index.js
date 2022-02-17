import moment from "moment";
var timeRegex = /\d\d?([:,]\d\d)?([ap]m)?/gi;
export function formatTime(time, militaryTime) {
    var format = militaryTime ? "HH:mm" : "h:mm A";
    return moment(time, ["hhmmA", "hmmA", "hhmm A", "hmm A"]).format(format);
}
export function formatTimesWithinString(string, militaryTime) {
    return string.replace(timeRegex, function (match) { return formatTime(match, militaryTime); });
}
