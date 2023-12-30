"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Display } from "./_component/Display";
import { Inputs } from "./_component/Inputs";

const App = () => {
  const [formula, setFormula] = useState<string[]>(["(1👁️1)👁️2"]);

  return (
    <main className="flex items-center justify-center min-h-screen w-full">
      <Card className="min-w-96 p-4 mx-auto">
        <Display formula={formula} />
        <Inputs formula={formula} setFormula={setFormula} />
      </Card>
    </main>
  );
};

export default App;
