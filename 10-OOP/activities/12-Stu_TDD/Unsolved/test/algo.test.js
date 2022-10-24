const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("Should return a new reversed version of the string", () => {
      const str = "Hello World!";
      const result = "!dlroW olleH";
      const obj = new Algo.reverse(str);
      expect(obj).toEqual(result);
    });
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if the string is a palindrome", () => {
      const str = "racecar";
      const obj = new Algo(str).isPalindrome(str);
      expect(obj.toEqual(str));
    });

    it("should return false if the str is not a palindrome", () => {
      const str = "neon";
      const obj = new Algo(str).isPalindrome(str);
      expect(obj.toEqual(str));
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it("Should return a new string with the first letter of the string is capitalized", () => {
      const str = "capitalize every first word of the string";
      const obj = new Algo(str).capitalize(str);
      expect(obj.toEqual("Capitalize every first word of the string"));
    });
  });
});
