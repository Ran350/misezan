import { styled } from "@kuma-ui/core";
import { evaluate } from "@ran350/misezan";
import type { FC } from "react";

type Props = {
  formula: string[];
};

export const Display: FC<Props> = ({ formula }) => {
  const result = evaluate(formula.join("")) ?? "";

  return (
    <Wrapper>
      <Formula>{formula}</Formula>
      <Result>
        <div>=</div>
        <div>{result}</div>
      </Result>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: t("colors.navy");
  font-size: 1.5rem;
  margin: 1rem 0;
  width: 21rem;
`;

const Formula = styled.div`
  margin-bottom: 1rem;
  padding: 0 1.5rem;
  text-align: right;
  text-shadow: 1px 1px 0 t("colors.white");
`;

const Result = styled.div`
  padding: 1rem 1.5rem;
  width: 100%;

  border: 0;
  border-radius: 2rem;
  background-color: t("colors.background");
  text-shadow: 1px 1px 0 t("colors.white");

  box-shadow:
    inset 2px 2px 5px t("colors.shadow"),
    inset -5px -5px 10px t("colors.white");
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
`;
