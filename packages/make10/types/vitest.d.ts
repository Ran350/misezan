/* eslint-disable no-unused-vars */
import "vitest";

interface CustomMatchers<R = unknown> {
  toBeMisezanEval<T>(expected: T): R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
