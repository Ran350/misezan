import { evaluate } from "@repo/misezan";
import { expect } from "vitest";

const passMessage = <T>(received: string, expected: T) =>
  `received ${received} to be ${expected}`;
const failMessage = <T>(received: string, expected: T) =>
  `received ${received} not to be ${expected}`;

expect.extend({
  toBeMisezanEval<T>(received: string, expected: T) {
    const pass: boolean = evaluate(received) === expected;

    const message: () => string = pass
      ? () => passMessage(received, expected)
      : () => failMessage(received, expected);

    return { pass, message };
  },
});
