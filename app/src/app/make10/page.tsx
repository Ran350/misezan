import { TypographyH4 } from "@/components/ui/typograpy";
import { Metadata } from "next";
import Make10Card from "./_components/Make10Card";

export const metadata: Metadata = {
  title: "見せ算 make10 | MSZN",
  description: "さや香のM-1決勝ネタ「見せ算」を用いて make10 を解くツール",
};

export default function Page() {
  return (
    <main className="p-4 flex flex-col items-center gap-4 w-full">
      <section className="lg:w-1/2 w-11/12">
        <TypographyH4 className="text-center text-gray-600">
          make 10 puzzle
        </TypographyH4>
        <p>
          <p className="text-xs md:text-sm text-gray-400">
            make 10
            puzzleとは、4つの数字と四則演算とカッコを用いて10を作る遊びです。
            本ツールは、本来の四則演算に見せ算を加えた五則演算を用いて10を作る式を生成します。
          </p>
        </p>
      </section>

      <Make10Card />
    </main>
  );
}
