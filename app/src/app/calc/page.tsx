import { TypographyH4 } from "@/components/ui/typograpy";
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
      <main className="flex flex-col gap-8 items-center justify-center w-full">
        <section className="text-center">
          <TypographyH4 className="text-gray-600">見せ算電卓</TypographyH4>
          <p className="text-gray-500">
            見せ算演算子を「👁️」とした五則演算に対応
          </p>
        </section>
        <Calc />
      </main>
    </div>
  );
}
