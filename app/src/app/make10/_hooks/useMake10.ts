import { make10 } from "@repo/make10";
import { useCallback, useMemo, useState } from "react";

export const useMake10 = () => {
  const [digits, setInputs] = useState<string[]>(["1", "1", "5", "8"]);

  type Answers = ReturnType<typeof make10> | "invalid";
  const answers: Answers = useMemo(() => {
    if (digits.every((digit) => /^\d$/.test(digit))) {
      return make10(digits.map((digit) => Number(digit)));
    }
    return "invalid";
  }, [digits]);

  const isMaxDigitLength = useMemo(() => digits.length === 4, [digits]);
  const isMinDigitLength = useMemo(() => digits.length === 2, [digits]);

  const changeDigit = useCallback(
    (index: number, value: string) => {
      const newDigits = [...digits];
      newDigits[index] = value;
      setInputs(newDigits);
    },
    [digits],
  );

  const incrementDigit = useCallback(() => {
    if (digits.length >= 4) return;
    setInputs([...digits, ""]);
  }, [digits]);

  const decrementDigit = useCallback(() => {
    if (digits.length <= 2) return;
    setInputs(digits.slice(0, digits.length - 1));
  }, [digits]);

  return {
    digits,
    answers,
    isMaxDigitLength,
    isMinDigitLength,
    changeDigit,
    incrementDigit,
    decrementDigit,
  };
};
