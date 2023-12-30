"use client";

import { useState } from "react";
import { Display } from "./_component/Display";
import { Inputs } from "./_component/Inputs";

const App = () => {
  const [formula, setFormula] = useState<string[]>(["0"]);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="min-width-30rem p-4 mx-auto">
        <div className="p-0 m-0 text-black text-center text-1.3rem;">
          見せ算👁️計算機
        </div>
        <Display formula={formula} />
        <Inputs formula={formula} setFormula={setFormula} />
      </div>
    </main>
  );
};

export default App;
