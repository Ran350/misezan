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
  width: 21rem;
  margin: 1rem 0;
  font-size: 1.5rem;
  color: t("colors.navy");
`;

const Formula = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  text-align: right;
  text-shadow: 1px 1px 0 t("colors.white");
`;

const Result = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 1.5rem;
  text-shadow: 1px 1px 0 t("colors.white");
  background-color: t("colors.background");
  border: 0;
  border-radius: 2rem;
  box-shadow:
    inset 2px 2px 5px t("colors.shadow"),
    inset -5px -5px 10px t("colors.white");
`;
