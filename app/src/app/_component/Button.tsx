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
  display: block;
  width: 4rem;
  height: 4rem;
  padding: 0;
  margin: 0;
  text-align: center;
  text-shadow: 1px 1px 1px t("colors.white");
`;

const ButtonStyle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: arial, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: t("colors.navy");
  text-shadow: 1px 1px 0 t("colors.white"));
  cursor: pointer;
  background-color: t("colors.background");
  border: 0;
  border-radius: 1rem;
  box-shadow:
    -5px -5px 20px t("colors.white"),
    5px 5px 20px t("colors.shadow");
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
