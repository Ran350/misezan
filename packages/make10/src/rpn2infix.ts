import { operator, type Operator } from "./operator";
import { Rpn } from "./rpn";

/**
 * @description RPN を中置記法に変換
 * @param [1, 2, "+", 3, "+", 4, "+"]
 * @returns "((1+2)+3)+4"
 */
export function rpn2infix(rpn: Rpn): string {
  const stack: string[] = [];

  for (const element of rpn) {
    // 数字
    if (typeof element === "number") {
      stack.push(element.toString());
    }

    // 演算子
    else if (Object.values<Operator>(operator).includes(element)) {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error("a and b must be number value");
      }
      stack.push("(" + a + element + b + ")");
    }

    // Invalid element
    else {
      throw new Error("Invalid element");
    }
  }

  const result = stack.pop();
  if (result === undefined) {
    throw new Error("result must be string value");
  }

  // 先端と末端の () を削除
  return result.slice(1, -1);
}
