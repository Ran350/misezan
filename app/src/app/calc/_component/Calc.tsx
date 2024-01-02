"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Display } from "./Display";
import { Inputs } from "./Inputs";

export const Calc = () => {
  const [formula, setFormula] = useState<string[]>([
    "(",
    "1",
    "👁",
    "1",
    ")",
    "👁",
    "2",
  ]);

  return (
    <Card className="w-fit p-6 md:p-8">
      <Display formula={formula} />
      <Inputs formula={formula} setFormula={setFormula} />
    </Card>
  );
};
