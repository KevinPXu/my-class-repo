const Child = require("../child");

describe("Child", () => {
  // TODO: Add a comment describing the purpose of the following test suite\
  //checks certain conditions when calling the child function in child.js

  describe("Initialization", () => {
    it("should create an object with a name and age if provided valid arguments", () => {
      const child = new Child("Sarah", 3);

      // TODO: Add a comment describing the purpose of the following statements
      // checks to see if child name and age are equal to what we gave as arguments
      expect(child.name).toEqual("Sarah");
      expect(child.age).toEqual(3);
    });

    it("should throw an error if provided no arguments", () => {
      // TODO: Add a comment describing the purpose of the following expression
      // creates a callback function to check the errors within the child.js function
      const cb = () => new Child();

      // TODO: Add a comment describing the purpose of the following statement
      //runs the cb function which creates a new child and checks to see if the error is thrown
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an age", () => {
      const cb = () => new Child("Sarah");

      // TODO: Add a comment describing the purpose of the following declaration
      //creates a new error object
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      // TODO: Add a comment describing the purpose of the following statement
      // checks the callback function to see if the error was thrown
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Child(3, 2);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is not a number", () => {
      const cb = () => new Child("Sarah", "2");
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'age' is less than 0", () => {
      const cb = () => new Child("Sarah", -1);
      const err = new Error(
        "Expected parameter 'age' to be a non-negative number"
      );

      expect(cb).toThrowError(err);
    });
  });
});
