import type { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode; onClick: () => void }> = ({
  children,
  onClick,
}) => (
  <div className="block w-4 h-4 p-0 m-0 text-center text-white">
    <button
      onClick={onClick}
      className={
        "inline-flex items-center justify-center w-full h-full p-0 m-0 font-sans text-2xl font-bold text-navy shadow cursor-pointer bg-background border-0 rounded-lg transition duration-200 ease-in-out"
      }
    >
      {children}
    </button>
  </div>
);

type Props = {
  text: string;
  onClick: () => void;
};
export const NumberButton: FC<Props> = (props) => {
  return <Button onClick={props.onClick}>{props.text}</Button>;
};

export const OperatorButton: FC<Props> = (props) => (
  <Button onClick={props.onClick}>
    <div className="text-yellow text-shadow-yellow">{props.text}</div>
  </Button>
);

export const ACButton: FC<Props> = (props) => (
  <Button onClick={props.onClick}>
    <div className="text-yellow text-shadow-red">{props.text}</div>
  </Button>
);

export const CEButton: FC<Props> = (props) => (
  <Button onClick={props.onClick}>
    <div className="text-yellow text-shadow-red">{props.text}</div>
  </Button>
);
