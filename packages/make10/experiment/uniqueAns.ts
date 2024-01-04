import fs from "fs";

const read = (file: string): Set<string> => {
  const rawData = fs.readFileSync(file);
  const array = JSON.parse(rawData as any);
  const digits: string[] = array.map((digits: number[]) => digits.join(""));
  return new Set<string>(digits);
};

const misezanAns = read("misezan-make10.json");
const normalAns = read("make10.json");

const uniqueElements = new Set();

for (const item of misezanAns) {
  if (!normalAns.has(item)) {
    uniqueElements.add(item);
  }
}

const data = JSON.stringify(Array.from(uniqueElements));
fs.writeFileSync("unique-ans.json", data);
