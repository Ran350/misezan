import { styled } from "@kuma-ui/core";
import type { Dispatch, FC, SetStateAction } from "react";
import { ACButton, CEButton, NumberButton, OperatorButton } from "./Button";

type Props = {
  formula: string[];
  setFormula: Dispatch<SetStateAction<string[]>>;
};

export const Inputs: FC<Props> = ({ formula, setFormula }) => {
  const onClickNumber = (symbol: string) => {
    if (formula.at(0) === "0") {
      setFormula([symbol]);
    } else {
      setFormula((prev) => [...prev, symbol]);
    }
  };

  return (
    <Grid>
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
      <NumberButton text={"."} onClick={() => onClickNumber(".")} />
      <NumberButton text={"👁️"} onClick={() => onClickNumber("👁️")} />

      {/* 2nd line */}
      <NumberButton text={"7"} onClick={() => onClickNumber("7")} />
      <NumberButton text={"8"} onClick={() => onClickNumber("8")} />
      <NumberButton text={"9"} onClick={() => onClickNumber("9")} />
      <OperatorButton text={"＋"} onClick={() => onClickNumber("+")} />

      {/* 3rd line */}
      <NumberButton text={"4"} onClick={() => onClickNumber("4")} />
      <NumberButton text={"5"} onClick={() => onClickNumber("5")} />
      <NumberButton text={"6"} onClick={() => onClickNumber("6")} />
      <OperatorButton text={"−"} onClick={() => onClickNumber("-")} />

      {/* 4th line */}
      <NumberButton text={"1"} onClick={() => onClickNumber("1")} />
      <NumberButton text={"2"} onClick={() => onClickNumber("2")} />
      <NumberButton text={"3"} onClick={() => onClickNumber("3")} />
      <OperatorButton text={"×"} onClick={() => onClickNumber("*")} />

      {/* 5th line */}
      <NumberButton text={"0"} onClick={() => onClickNumber("0")} />
      <NumberButton text="(" onClick={() => onClickNumber("(")} />
      <NumberButton text=")" onClick={() => onClickNumber(")")} />
      <OperatorButton text={"÷"} onClick={() => onClickNumber("/")} />
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  max-width: 40rem;
`;
