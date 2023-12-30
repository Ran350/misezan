import type { Dispatch, FC, SetStateAction } from "react";
import { ACButton, CEButton, NumberButton, OperatorButton } from "./Button";

type Props = {
  formula: string[];
  setFormula: Dispatch<SetStateAction<string[]>>;
};

export const Inputs: FC<Props> = ({ formula, setFormula }) => {
  const onClickSymbol = (symbol: string) => {
    if (formula.at(0) === "0") {
      setFormula([symbol]);
    } else {
      setFormula((prev) => [...prev, symbol]);
    }
  };

  return (
    <section className="grid grid-cols-4 gap-4 max-w-96">
      {/* 1st line */}
      <ACButton text="AC" onClick={() => setFormula(["0"])} />
      <CEButton
        text="CE"
        onClick={() =>
          formula.length === 1
            ? setFormula(["0"])
            : setFormula(formula.slice(0, -1))
        }
      />
      <NumberButton text={"."} onClick={() => onClickSymbol(".")} />
      <OperatorButton text={"👁️"} onClick={() => onClickSymbol("👁️")} />

      {/* 2nd line */}
      <NumberButton text={"7"} onClick={() => onClickSymbol("7")} />
      <NumberButton text={"8"} onClick={() => onClickSymbol("8")} />
      <NumberButton text={"9"} onClick={() => onClickSymbol("9")} />
      <OperatorButton text={"＋"} onClick={() => onClickSymbol("+")} />

      {/* 3rd line */}
      <NumberButton text={"4"} onClick={() => onClickSymbol("4")} />
      <NumberButton text={"5"} onClick={() => onClickSymbol("5")} />
      <NumberButton text={"6"} onClick={() => onClickSymbol("6")} />
      <OperatorButton text={"−"} onClick={() => onClickSymbol("-")} />

      {/* 4th line */}
      <NumberButton text={"1"} onClick={() => onClickSymbol("1")} />
      <NumberButton text={"2"} onClick={() => onClickSymbol("2")} />
      <NumberButton text={"3"} onClick={() => onClickSymbol("3")} />
      <OperatorButton text={"×"} onClick={() => onClickSymbol("*")} />

      {/* 5th line */}
      <NumberButton text={"0"} onClick={() => onClickSymbol("0")} />
      <NumberButton text="(" onClick={() => onClickSymbol("(")} />
      <NumberButton text=")" onClick={() => onClickSymbol(")")} />
      <OperatorButton text={"÷"} onClick={() => onClickSymbol("/")} />
    </section>
  );
};
