"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { useMake10 } from "../_hooks/useMake10";
import { Answer } from "./Answer";
import { Make10Input } from "./Input";

const App = () => {
  const { digits, answers, changeDigit, incrementDigit, decrementDigit } =
    useMake10();

  return (
    <Card>
      <div className="flex">
        <Button onClick={incrementDigit} disabled={digits.length < 2}>
          <Minus />
        </Button>

        <Make10Input digits={digits} onChange={changeDigit} />

        <Button onClick={decrementDigit} disabled={digits.length > 5}>
          <Plus />
        </Button>
      </div>

      <Card>
        <Answer answers={answers} />
      </Card>
    </Card>
  );
};

export default App;
