import { evaluate } from "@repo/misezan";
import { Operator, operator } from "./operator";
import { Rpn } from "./rpn";

/**
 * @description RPN を計算
 * @returns 計算結果 or 不適切な入力なら null
 */
export function calculateRpn(rpn: Rpn): number | null {
  const stack: number[] = [];

  for (const element of rpn) {
    // 数字
    if (typeof element === "number") {
      stack.push(element);
    }

    // 演算子
    else if (Object.values<Operator>(operator).includes(element)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) return null;
      const result = calc(a, element, b);
      if (result === null) return null;
      stack.push(result);
    }

    // Invalid element
    else {
      throw new Error("Invalid element");
    }
  }

  const ans = stack.pop();
  return ans === undefined ? null : ans;
}

function calc(a: number, op: Operator, b: number): number | null {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) return null;
      return a / b;
    case "👁️":
      return evaluate(a + "👁️" + b);
  }
}
