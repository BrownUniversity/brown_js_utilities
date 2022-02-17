import { adjustColor } from "../src/colors";

describe("adjustColor", () => {
  test("should change a color value 20% darker by default", () => {
    const result = adjustColor("#e20f00");
    expect(result).toEqual("#b50c00");
  });
  test("should change a color value 10% lighter by passed params", () => {
    const result = adjustColor("#e20f00", 10);
    expect(result).toEqual("#f91100");
  });
  test("should change a color value 10% darker by passed params", () => {
    const result = adjustColor("#e20f00", -10);
    expect(result).toEqual("#cb0e00");
  });
});
