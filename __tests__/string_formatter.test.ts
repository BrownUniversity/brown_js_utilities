import { toKebabCase, toCamelCase, capitalize } from "../src/string_formatters";

describe("toKebabCase", () => {
  it("makes a string kebob case", () => {
    const one = toKebabCase("hello friend")
    expect(one).toEqual("hello-friend");
  })
})

describe("toKebabCase", () => {
  it("makes a string kebob case", () => {
    const one = toCamelCase("hello friend")
    expect(one).toEqual("helloFriend");
  })
})

describe("toKebabCase", () => {
  it("makes a string kebob case", () => {
    const one = capitalize("hello friend")
    expect(one).toEqual("Hello friend");
  })
})
