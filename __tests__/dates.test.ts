import { settingsDateFormat } from "../src/dates";

describe("settingsDateFormat", () => {
  it("it formats date by passed type", () => {
    const usFormat = settingsDateFormat("09/21/1975", "us")
    expect(usFormat).toEqual("9/21/1975");

    const euFormat = settingsDateFormat("09/21/1975", "eu")
    expect(euFormat).toEqual("21-Sep-1975");

    const intFormat = settingsDateFormat("09/21/1975", "int")
    expect(intFormat).toEqual("1975/09/21");
  })
})
