import {multiply,  makeLowerCase  } from "./HelperFunctions";

test("multiply", () => {
  expect(multiply(2,5)).toBe(10);
})

test("makeLowerCase", () => {
  expect(makeLowerCase("ABC")).toBe("abc");
})