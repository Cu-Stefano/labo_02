
const {reverseString, isPalindrome, truncateString, countCharacters,} = require("./src/stringUtils.js");

test("reverse string test", () => {
    expect(reverseString("abc")).toBe("cba");
})

test("reverse a empty string test", () => {
    expect(reverseString("")).toBe("");
})

test("is a string palindrome test", () => {
    expect(isPalindrome("aba")).toBe(true);
})

test("is a string palindrome test, fail", () => {
    expect(isPalindrome("abc")).toBe(false);
})

test("truncating a string test", () => {
    expect(truncateString("hello", 2)).toBe("he...");
})

test("truncating a string test, maxLenght greater", () => {
    expect(truncateString("hello", 8)).toBe("hello");
})

test("truncating a empty string test", () => {
    expect(truncateString("", 2)).toBe("");
})

test("counting string chars", () => {
    expect(countCharacters('hello')).toBe({ h: 1, e: 1, l: 2, o: 1 });
})

test("counting empty string chars", () => {
    expect(countCharacters("")).toBe({});
})
