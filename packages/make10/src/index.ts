import { calculateRpn } from "./calculateRpn";
import { allCombinations } from "./combination";
import { rpn2infix } from "./rpn2infix";

/**
 * @description solve make10 and return all answers
 * @param inputs Numeric value of type string
 * @param allowableHugeTimeComplexity false: throw the error when inputs.length is not [2,5].
 * @example make10(6,8,9,9) -> ["(6👁️9)-(9-8)", ...]
 */
export function make10(
  inputs: number[],
  allowableHugeTimeComplexity = false
): string[] {
  if (
    !allowableHugeTimeComplexity &&
    (inputs.length <= 1 || 6 <= inputs.length)
  ) {
    throw new Error("The length of the argument array must be '2 <= len <= 5'");
  }

  if (inputs.some((i) => !/\d+/.test(i.toString()))) {
    throw new Error("inputs must be numeric value");
  }

  // (1) all combinations
  const rpns = allCombinations(inputs);

  // (2) only RPN expressions whose result is 10
  const rpn10 = rpns.filter((rpn) => {
    const result = calculateRpn(rpn);
    if (result === null) return false;
    const TOLERANCE = 10 ** -8;
    return Math.abs(result - 10) < TOLERANCE;
  });

  // (3) RPN -> infix notation
  const infixes = rpn10.map((rpn) => rpn2infix(rpn));
  const result = Array.from(new Set(infixes));

  return result;
}
