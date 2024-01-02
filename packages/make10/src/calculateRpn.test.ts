import { describe, expect, test } from "vitest";
import { calculateRpn } from "./calculateRpn";

describe("calculateRpn", () => {
  test("配列形式のRPNを計算する", () => {
    const accept = calculateRpn([1, 1, "👁️", 3, "+", 9, 3, "/", "*"]);
    expect(accept).toBe(9);
  });

  test("ゼロ除算とき、nullを返す", () => {
    const accept = calculateRpn([1, 0, "/"]);
    expect(accept).toBe(null);
  });

  test("不正な演算子のとき、nullを返す", () => {
    const accept = calculateRpn([1, "+", 2]);
    expect(accept).toBe(null);
  });
});
