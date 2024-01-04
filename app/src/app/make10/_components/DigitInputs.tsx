import { Input } from "@/components/ui/input";
import { ChangeEvent, FC } from "react";

type Props = {
  digits: string[];
  onChange: (_index: number, _value: string) => void;
};

export const DigitInputs: FC<Props> = (props) => {
  const handleChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ): void => {
    const val = e.currentTarget.value;
    props.onChange(index, val.at(-1) || ""); // 1桁のみ入力する
  };

  return (
    <div className="flex gap-1 md:gap-2">
      {props.digits.map((digit, i) => (
        <Input
          key={i}
          type="number"
          value={digit}
          min={0}
          max={9}
          onChange={(e) => handleChange(i, e)}
          autoFocus={i === 0}
          className="p-0 md:p-1 md:pr-0 w-11 md:w-14 h-11 md:h-14 text-xl md:text-2xl text-center"
        />
      ))}
    </div>
  );
};
