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
    <main className="p-4 flex flex-col items-center gap-4 w-full">
      <section>
        <TypographyH4 className="text-center text-gray-600">
          見せ算電卓
        </TypographyH4>
        <p className="text-xs md:text-sm text-gray-400">
          見せ算演算子を「👁️」とした五則演算 計算機
        </p>
      </section>

      <div className="mx-auto">
        <Calc />
      </div>
    </main>
  );
}
