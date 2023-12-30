import { expect } from "vitest";

const passMessage = <T>(received: string, expected: T) =>
  `received ${received} to be ${expected}`;
const failMessage = <T>(received: string, expected: T) =>
  `received ${received} not to be ${expected}`;

expect.extend({
  toBeEvalResult<T>(received: string, expected: T) {
    const pass: boolean = eval(received) === expected;

    const message: () => string = pass
      ? () => passMessage(received, expected)
      : () => failMessage(received, expected);

    return { pass, message };
  },
});
