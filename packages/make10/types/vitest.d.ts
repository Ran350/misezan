import "vitest";

interface CustomMatchers<R = unknown> {
  toBeEvalResult<T>(expected: T): R;
}

declare module "vitest" {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
