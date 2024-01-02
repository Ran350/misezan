"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useMake10 } from "../_hooks/useMake10";
import { Answer } from "./Answer";
import { DigitInputs } from "./DigitInputs";

const App = () => {
  const {
    digits,
    answers,
    isMaxDigitLength,
    isMinDigitLength,
    changeDigit,
    incrementDigit,
    decrementDigit,
  } = useMake10();

  return (
    <Card className="p-4 md:p-8 lg:w-1/2 w-11/12 md:w-full">
      <div className="mx-auto w-fit flex gap-2">
        <Button
          onClick={decrementDigit}
          disabled={isMinDigitLength}
          className={cn([
            "w-6 md:w-8 h-6 md:h-8 p-1 my-2 md:my-3",
            isMinDigitLength
              ? "bg-gray-400"
              : "bg-indigo-400 hover:bg-indigo-500",
          ])}
        >
          <Minus />
        </Button>

        <DigitInputs digits={digits} onChange={changeDigit} />

        <Button
          onClick={incrementDigit}
          disabled={isMaxDigitLength}
          className={cn([
            "w-6 md:w-8 h-6 md:h-8 p-1 my-2 md:my-3",
            isMaxDigitLength ? "bg-gray-400" : "bg-red-400 hover:bg-red-500",
          ])}
        >
          <Plus />
        </Button>
      </div>

      <div className="my-4 border-t-2 border-gray-50" />

      <Answer answers={answers} />
    </Card>
  );
};

export default App;
