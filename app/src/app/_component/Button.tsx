import { styled } from "@kuma-ui/core";
import type { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};
export const NumberButton: FC<Props> = (props) => {
  return (
    <Wrapper>
      <ButtonStyle onClick={props.onClick}>{props.text}</ButtonStyle>
    </Wrapper>
  );
};

export const OperatorButton: FC<Props> = (props) => (
  <Wrapper>
    <SymbolButtonStyle onClick={props.onClick}>{props.text}</SymbolButtonStyle>
  </Wrapper>
);

export const ACButton: FC<Props> = (props) => (
  <Wrapper>
    <AlertButtonStyle onClick={props.onClick}>{props.text}</AlertButtonStyle>
  </Wrapper>
);

export const CEButton: FC<Props> = (props) => (
  <Wrapper>
    <AlertButtonStyle onClick={props.onClick}>{props.text}</AlertButtonStyle>
  </Wrapper>
);

const Wrapper = styled.div`
  text-shadow: 1px 1px 1px t("colors.white");
  padding: 0;
  margin: 0;
  text-align: center;
  height: 4rem;
  width: 4rem;
  display: block;
`;

const ButtonStyle = styled.button`
  font-family: arial, sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  text-shadow: 1px 1px 0 t("colors.white"));
  color: t("colors.navy");
  background-color: t("colors.background");

  margin: 0;
  border: 0;
  padding: 0;
  border-radius: 1rem;
  box-shadow:
    -5px -5px 20px t("colors.white"),
    5px 5px 20px t("colors.shadow");
  height: 100%;
  width: 100%;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow:
      -2px -2px 5px t("colors.white"),
      2px 2px 5px t("colors.shadow");
  }

  &:active {
    box-shadow:
      inset 1px 1px 2px t("colors.shadow"),
      inset -1px -1px 2px t("colors.white");
  }
`;

const SymbolButtonStyle = styled(ButtonStyle)`
  color: t("colors.yellow");
  text-shadow:
    t("colors.yellow") 0 0 2px,
    t("colors.yellow") 0 0 40px;
`;

const AlertButtonStyle = styled(ButtonStyle)`
  color: t("colors.red");
  text-shadow:
    t("colors.red") 0 0 1px,
    t("colors.red") 0 0 30px;
`;
