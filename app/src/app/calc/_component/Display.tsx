import { evaluate } from "@repo/misezan";
import type { FC } from "react";

type Props = {
  formula: string[];
};

export const Display: FC<Props> = ({ formula }) => {
  const result = evaluate(formula.join("")) ?? "";

  return (
    <section className="w-21rem pb-4 text-1.5xl text-navy">
      <div className="p-0 mx-4 mb-4 text-right text-xl">{formula}</div>

      <div className="flex justify-between h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-xl">
        <div>=</div>
        <div>{result}</div>
      </div>
    </section>
  );
};
