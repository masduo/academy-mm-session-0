import { FizzBuzzer } from "../main/FizzBuzzer";

/*
Write a function that
- takes numbers from 1 to 100 and
- outputs them as a string i.e "4",
- but for multiples of three returns "Fizz" instead of the number and
- for the multiples of five returns "Buzz".
- For numbers which are multiples of both three and five returns "FizzBuzz".
*/

describe("Fizz Buzz", () => {
  it("should return the number that is entered", () => {
    const fizzBuzzer = new FizzBuzzer();
    const input = 1;
    expect(fizzBuzzer.fizzBuzz(input)).toBe(input.toString());
  });

  it("should return the number that is entered", () => {
    const fizzBuzzer = new FizzBuzzer();
    const input = 2;
    expect(fizzBuzzer.fizzBuzz(input)).toBe(input.toString());

  });

  it("should return fizz for multiples of three", () => {
    const fizzBuzzer = new FizzBuzzer();
    const input = 3;
    expect(fizzBuzzer.fizzBuzz(input)).toBe("Fizz");

  });

});


