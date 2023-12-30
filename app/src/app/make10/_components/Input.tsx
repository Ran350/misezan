import { Input } from "@/components/ui/input";
import { ChangeEvent, FC } from "react";

type Props = {
  digits: string[];
  onChange: (_index: number, _value: string) => void;
};

export const Make10Input: FC<Props> = (props) => {
  const handleChange = (
    digit: number,
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const val = e.currentTarget.value;
    if (!val.match(/^[0-9]+$/)) return; // 1桁の数字以外は入力できないように
    props.onChange(digit, val);
  };

  return (
    <div>
      {props.digits.map((digit, i) => (
        <Input
          key={i}
          type="number"
          value={digit}
          onChange={(e) => handleChange(i, e)}
          autoFocus={true}
        />
      ))}
    </div>
  );
};
