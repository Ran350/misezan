"use client";

import { styled } from "@kuma-ui/core";
import { useState } from "react";
import { Display } from "./_component/Display";
import { Inputs } from "./_component/Inputs";

const App = () => {
  const [formula, setFormula] = useState<string[]>(["0"]);

  return (
    <Wrapper>
      <Calculator>
        <Title>見せ算👁️計算機</Title>
        <Display formula={formula} />
        <Inputs formula={formula} setFormula={setFormula} />
      </Calculator>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Calculator = styled.div`
  margin: 0 auto;
  padding: 1rem;
  min-width: 30rem;
`;

const Title = styled.div`
  padding: 0;
  margin: 0;
  text-align: center;
  font-family: t("font.kosugi_maru");
  font-size: 1.3rem;
  color: t("colors.black");
`;
