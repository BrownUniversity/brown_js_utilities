import moment from "moment";

const timeRegex = /\d\d?([:,]\d\d)?([ap]m)?/gi;

export function formatTime(
  time: string | RegExpMatchArray,
  militaryTime: boolean
) {
  const format = militaryTime ? "HH:mm" : "h:mm A";
  return moment(time, ["hhmmA", "hmmA", "hhmm A", "hmm A"]).format(format);
}

export function formatTimesWithinString(string: string, militaryTime: boolean) {
  return string.replace(timeRegex, match => formatTime(match, militaryTime));
}
