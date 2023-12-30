import { assert, test } from "vitest";
import { evaluate } from "../calculator";

test(`Parser: calculator`, () => {
  assert.strictEqual(evaluate("1"), 1);
  assert.strictEqual(evaluate("+1.5"), 1.5);
  assert.strictEqual(evaluate("-0.5"), -0.5);
  assert.strictEqual(evaluate("1 + 2"), 3);
  assert.strictEqual(evaluate("1-2"), -1);
  assert.strictEqual(evaluate("1 * 2"), 2);
  assert.strictEqual(evaluate("1 / 2"), 0.5);
  assert.strictEqual(evaluate("1 + 2 * 3 + 4"), 11);
  assert.strictEqual(evaluate("(1 + 2) * (((3 + 4)))"), 21);
  assert.strictEqual(evaluate("1.2--3.4"), 4.6);

  assert.strictEqual(evaluate("1👁️1"), 0);
  assert.strictEqual(evaluate("1👁️2"), 2);
  assert.strictEqual(evaluate("2👁️1"), 2);
  assert.strictEqual(evaluate("6👁️9"), 11);
  assert.strictEqual(evaluate("2👁️5"), 1.1);
  assert.strictEqual(evaluate("1👁️100"), 83);
  assert.strictEqual(evaluate("6👁️9 + 1👁️2 * 2"), 15);
});
