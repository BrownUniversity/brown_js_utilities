import { formatTime, formatTimesWithinString } from "../src/times";

describe("formatTime", () => {
  it("makes a string kebob case", () => {
    const militaryTime = formatTime("1pm", true)
    expect(militaryTime).toEqual("13:00");

    const notMititaryTime = formatTime("1pm", false)
    expect(notMititaryTime).toEqual("1:00PM");
  })
})

describe("formatTimesWithinString", () => {
  it("makes a string kebob case", () => {
    const militaryTime = formatTimesWithinString("A sunny Sunday at 1pm", true)
    expect(militaryTime).toEqual("A sunny Sunday at 13:00");

    const notMititaryTime = formatTimesWithinString("A sunny Sunday at 1pm", false)
    expect(notMititaryTime).toEqual("A sunny Sunday at 1:00PM");
  })
})
