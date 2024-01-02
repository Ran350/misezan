import { describe, expect, test } from "vitest";
import { make10 } from ".";

describe("2 桁 の make10 の答え", () => {
  test("5,5 -> [5+5] -> 10", () => {
    const accept = make10([5, 5]);
    accept.forEach((ans) => expect(ans).toBeMisezanEval(10));
    expect(accept.length).toBeGreaterThan(0);
  });

  test("答えが存在しないとき", () => {
    const accept = make10([0, 0]);
    expect(accept).toEqual([]);
  });
});

describe("4 桁 の make10 の答え", () => {
  test("1,1,9,9 -> [1+(1+(1/9)), ...] -> 10", () => {
    const accept = make10([1, 1, 9, 9]);
    accept.forEach((ans) => expect(ans).toBeMisezanEval(10));
  });

  test("答えが存在しないとき", () => {
    const accept = make10([0, 0, 0, 0]);
    expect(accept).toEqual([]);
  });
});

describe("5 桁 の make10 の答え", () => {
  test("1,8,8,8,8 -> [(((1+8)*8)+8)/8, ...] -> 10", () => {
    for (const ans of make10([1, 8, 8, 8, 8])) {
      expect(ans).toBeMisezanEval(10);
    }
  });
  test("答えが存在しないとき", () => {
    const accept = make10([0, 0, 0, 0, 0]);
    expect(accept).toEqual([]);
  });
});
