import { Metadata } from "next";
import { Calc } from "./_component/Calc";

export const metadata: Metadata = {
  title: "見せ算電卓 | MSZN",
  description:
    "さや香のM-1決勝ネタ「見せ算」のルールに対応した五則演算計算機。",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex items-center justify-center w-full">
        <Calc />
      </main>
    </div>
  );
}
