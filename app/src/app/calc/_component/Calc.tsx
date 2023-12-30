"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Display } from "./Display";
import { Inputs } from "./Inputs";

export const Calc = () => {
  const [formula, setFormula] = useState<string[]>(["(1👁️1)👁️2"]);

  return (
    <Card className="w-11/12 md:w-fit md:min-w-96 p-4 mx-auto">
      <Display formula={formula} />
      <Inputs formula={formula} setFormula={setFormula} />
    </Card>
  );
};
