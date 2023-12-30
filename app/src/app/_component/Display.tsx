import { evaluate } from "@ran350/misezan";
import type { FC } from "react";

type Props = {
  formula: string[];
};

export const Display: FC<Props> = ({ formula }) => {
  const result = evaluate(formula.join("")) ?? "";

  return (
    <section className="w-21rem my-4 text-1.5xl text-navy">
      <div className="p-0 mx-4 mb-4 text-right text-shadow-white">
        {formula}
      </div>

      <div className="box-sizing:border-box flex justify-between w-full p-4 text-shadow-white bg-background border-0 rounded-2xl shadow-inner shadow-white">
        <div className="font-bold">=</div>
        <div>{result}</div>
      </div>
    </section>
  );
};
