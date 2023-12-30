import { Button } from "@/components/ui/button";
import type { FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};
export const NumberButton: FC<Props> = (props) => {
  return (
    <Button
      variant="outline"
      onClick={props.onClick}
      className="h-12 text-bold text-lg"
    >
      {props.text}
    </Button>
  );
};

export const OperatorButton: FC<Props> = (props) => (
  <Button
    variant="outline"
    onClick={props.onClick}
    className="h-12 text-bold text-lg text-indigo-700 bg-indigo-50 hover:text-indigo-700 hover:bg-indigo-200"
  >
    {props.text}
  </Button>
);

export const ACButton: FC<Props> = (props) => (
  <Button
    variant="outline"
    onClick={props.onClick}
    className="h-12 text-bold text-lg text-red-700 bg-red-50 hover:text-red-700 hover:bg-red-200"
  >
    {props.text}
  </Button>
);

export const CEButton: FC<Props> = (props) => (
  <Button
    variant="outline"
    onClick={props.onClick}
    className="h-12 text-bold text-lg text-red-700 bg-red-50 hover:text-red-700 hover:bg-red-200"
  >
    {props.text}
  </Button>
);
