import fs from "fs";
import { make10 } from "../src";

const allFourDigitNumbers: number[][] = Array.from({ length: 10000 }, (_, i) =>
  String(i).padStart(4, "0").split("").map(Number),
);

const noAnswerDigitsNumber: number[][] = allFourDigitNumbers.filter(
  (digits) => make10(digits).length === 0,
);

const data = JSON.stringify(noAnswerDigitsNumber);
fs.writeFileSync("misezan-make10.json", data);
