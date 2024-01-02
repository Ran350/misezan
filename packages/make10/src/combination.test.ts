import { describe, expect, test } from "vitest";
import { allCombinations } from "./combination";

describe("allCombinations", () => {
  test("配列の組み合わせを返す", () => {
    const accept = allCombinations([1, 2]);
    expect(accept).toContainEqual([1, 2, "+"]);
  });
});
