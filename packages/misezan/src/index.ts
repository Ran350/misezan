import { evaluate as eval } from "./calculator";

export const evaluate = (formula: string): number | null => {
  try {
    return eval(formula);
  } catch (e) {
    return null;
  }
};
