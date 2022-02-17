import moment from "moment";
export function settingsDateFormat(date, type) {
    var dateFormats = {
        us: "M/D/YYYY",
        eu: "DD-MMM-YYYY",
        int: "YYYY/MM/DD"
    };
    return moment(new Date(date)).format(dateFormats[type]);
}
;
