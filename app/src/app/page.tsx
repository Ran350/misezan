import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InlineBlockSpan,
  TypographyH4,
  TypograpyCode,
} from "@/components/ui/typograpy";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mx-0 md:mx-auto py-4 md:py-8 px-[3%] md:w-2/3 flex flex-col gap-4 md:gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="italic text-center">
            <InlineBlockSpan>令和の時代に</InlineBlockSpan>
            <InlineBlockSpan>四則は少ないだろう</InlineBlockSpan>
          </CardTitle>
          <CardDescription className="text-center">
            <InlineBlockSpan>MSZNプロジェクトは</InlineBlockSpan>
            <InlineBlockSpan>
              見せ算の普及に貢献することを目的とし、
            </InlineBlockSpan>
            <InlineBlockSpan>
              見せ算に対応したいくつかのツールセットを
            </InlineBlockSpan>
            <InlineBlockSpan>提供する。</InlineBlockSpan>
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-col sm:flex-row gap-4 mx-auto my-0">
            <Button asChild>
              <Link href="/calc">見せ算 電卓</Link>
            </Button>
            <Button asChild>
              <Link href="/make10">見せ算 make10</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/Ran350/misezan/pkgs/npm/misezan">
                npm package
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card id="about-misezan">
        <CardHeader>
          <CardTitle>見せ算とは</CardTitle>
          <CardDescription>
            <p>
              見せ算とは、
              <a
                href="https://lemino.docomo.ne.jp/?crid=Y3JpZDovL3BsYWxhLmlwdHZmLmpwL3ZvZC8wMDAwMDAwMDAwX2wwbHFhdGRjbnQ%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                さや香の M-1 2023 決勝ネタ
              </a>
              内で、四則演算（足し算・引き算・掛け算・割り算）に次ぐ五則目として提案された架空の演算方法である。
              見せ算では、数字と数字を見せ合わせて「どう思うか？」を基に答えを算出する。
            </p>
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>見せ算のルール</CardTitle>
          <CardDescription>
            <a
              href="https://lemino.docomo.ne.jp/?crid=Y3JpZDovL3BsYWxhLmlwdHZmLmpwL3ZvZC8wMDAwMDAwMDAwX2wwbHFhdGRjbnQ%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              さや香の M-1 2023 決勝ネタ
            </a>
            で提案されたルール
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TypographyH4>基本</TypographyH4>
          <p className="mb-4">見せ算の計算結果のことを「眼（がん）」と呼ぶ。</p>

          <p>
            同じ数字同士を見せ合うと眼は0になる。（自分と同じ格好の人を見ると気まずくなり2人とも立ち去るため。）
          </p>
          <div className="text-center">
            <TypograpyCode>1見せ1=0</TypograpyCode>
            <TypograpyCode>2見せ2=0</TypograpyCode>
          </div>
          <p className="mt-4">
            小さい数字に大きい数字を見せ合うと大きい数字が残る。（小さい数が大きい数を怖がって逃げてしまうため。）
          </p>
          <div className="text-center">
            <TypograpyCode>1見せ2=2</TypograpyCode>
            <TypograpyCode>1見せ10=10</TypograpyCode>
          </div>

          <TypographyH4 className="mt-6">応用</TypographyH4>

          <div className="text-center mt-4">
            <TypograpyCode>6見せ9=11</TypograpyCode>
          </div>
          <p>（お互いが生き別れの兄弟と勘違いして近づいていくため。）</p>

          <div className="text-center mt-4">
            <TypograpyCode>2見せ5=1.1</TypograpyCode>
          </div>
          <p>
            （お互いが生き別れの兄弟と勘違いして近寄るがよく見ると全然違うことに気付きびっくりして携帯「.」を落としてしまうため。）
          </p>

          <div className="text-center mt-4">
            <TypograpyCode>1見せ100=83</TypograpyCode>
          </div>
          <p>
            （あまりにも人数差がありもう逃げても仕方ないと1が腹をくくって100に立ち向かい17人倒すため。）
          </p>

          <div className="text-center mt-4">
            <TypograpyCode>1見せ100=83</TypograpyCode>
          </div>
          <p>
            （あまりにも人数差がありもう逃げても仕方ないと1が腹をくくって100に立ち向かい17人倒すも残った83の中にすごく美人な女性がいた場合その女性が１を介抱したことをきっかけに二人は恋に落ちやがて結婚して子供が一人生まれるため。）
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
