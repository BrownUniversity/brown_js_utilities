import moment from "moment";

export function settingsDateFormat(date: string, type: "us" | "eu" | "int") {
  const dateFormats = {
    us: "M/D/YYYY",
    eu: "DD-MMM-YYYY",
    int: "YYYY/MM/DD"
  };

  return moment(new Date(date)).format(dateFormats[type]);
};
