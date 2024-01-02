import { Rpn } from "./rpn";
import { operator } from "./operator";

/**
 * @description 演算の全ての組み合わせを RPN で返す
 * @param [1,2,3,4]
 * @returns [1,2,"+",3,"+",4,"+"], ...]
 */
export function allCombinations(nums: number[]): Rpn[] {
  let combs = reduceDigits(nums.map((num) => [num]));

  for (let i = 0; i < nums.length - 2; i++) {
    combs = combs.map((comb) => reduceDigits(comb)).flat();
  }

  const ans = combs.flat();

  // 重複削除
  return Array.from(new Set(ans));
}

/**
 * @description nC2 の，選ばれる組み合わせを true，それ以外を false として返す
 * @param nC2のn
 * @returns [[true,true,false],[true,false,true],[false,true,true]]
 */
function nC2(num: number): boolean[][] {
  const flags: boolean[][] = [];

  for (let i = 0; i < num - 1; i++) {
    for (let j = i + 1; j < num; j++) {
      const list = new Array(num).fill(false);
      list[i] = list[j] = true;
      flags.push(list);
    }
  }

  return flags;
}

/**
 * @description n 個のRPNから 2 つ選んで n-1 個のRPNに
 * @param [1,2,3]
 * @returns [ [[1,2,"+"],3], [[1,2,"-"],3], ...]
 */
function reduceDigits(nums: Rpn[]): Rpn[][] {
  const rpnOperates: Array<(_a: Rpn, _b: Rpn) => Rpn> = [
    (a, b) => [...a, ...b, operator.plus],
    (a, b) => [...a, ...b, operator.minus],
    (a, b) => [...b, ...a, operator.minus],
    (a, b) => [...a, ...b, operator.times],
    (a, b) => [...a, ...b, operator.divide],
    (a, b) => [...b, ...a, operator.divide],
    (a, b) => [...a, ...b, operator.mise],
    (a, b) => [...b, ...a, operator.mise],
  ];

  const result: Rpn[][] = [];

  for (const flags of nC2(nums.length)) {
    for (const operate of rpnOperates) {
      const trues = nums.filter((_, i) => flags[i]);
      const falses = nums.filter((_, i) => !flags[i]);

      const a = trues.at(0);
      const b = trues.at(1);
      if (a === undefined || b === undefined) {
        throw new Error("a and b must be number value");
      }
      const rpn: Rpn = operate(a, b);

      result.push([rpn, ...falses]);
    }
  }
  return result;
}
