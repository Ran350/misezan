import { describe, expect, test } from "vitest";
import { rpn2infix } from "./rpn2infix";

describe("rpn2infix", () => {
  test("RPN を中置記法に変換", () => {
    const accept = rpn2infix([1, 2, "+", 3, "+", 4, "+"]);
    expect(accept).toBe("((1+2)+3)+4");
  });
});
