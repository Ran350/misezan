import { make10 } from "@repo/make10";
import { useCallback, useMemo, useState } from "react";

export const useMake10 = () => {
  const [digits, setInputs] = useState<string[]>(["1", "1", "5", "8"]);

  const answers: string[] = useMemo(() => make10(digits), [digits]);

  const changeDigit = useCallback(
    (index: number, value: string) => {
      const newDigits = [...digits];
      newDigits[index] = value;
      setInputs(newDigits);
    },
    [digits]
  );

  const incrementDigit = useCallback(() => {
    if (digits.length <= 2) return;
    setInputs(digits.slice(0, digits.length - 1));
  }, [digits]);

  const decrementDigit = useCallback(() => {
    if (digits.length >= 5) return;
    setInputs([...digits, ""]);
  }, [digits]);

  return { digits, answers, changeDigit, incrementDigit, decrementDigit };
};
