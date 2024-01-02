# @ran350/misezan

[さや香の M-1 2023 決勝ネタ](https://lemino.docomo.ne.jp/?crid=Y3JpZDovL3BsYWxhLmlwdHZmLmpwL3ZvZC8wMDAwMDAwMDAwX2wwbHFhdGRjbnQ%3D)「見せ算」に対応した五則演算器実装および npm package

## デモ

@ran350/misezan を使用した電卓アプリを以下にて公開している。
[https://mszn.vercel.app/](https://mszn.vercel.app/)

## 使い方

.npmrc に以下を記載する。
ただし、`${GITHUB_ACCESS_TOKEN}` の部分にはGitHub Personal Access Token (PAT)を記載する。
PATは、[ここ](https://github.com/settings/tokens/new)から`read:packages`権限を付与して作成する。
また、`GITHUB_ACCESS_TOKEN`は環境変数として設定することもできる。

```
//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}
@ran350:registry=https://npm.pkg.github.com
```

```sh
npm install @ran350/misezan
```

```ts
import { evaluate } from "misezan-evaluator";

evaluate("1見せ1"); // 0
evaluate("1見せ2"); // 2
evaluate("6見せ9"); // 11
evaluate("2見せ5"); // 1.1
evaluate("1見せ100"); // 83
```

## 見せ算のルール

> M-1 2023 で披露されたルールに対応しています。 見る数と見られる数は入れ替えても同じ答えとしています。
>
> 〈基本のルール〉
>
> 1 見せ 1 = 0
>
> 同じ数字を見せると 0 になる。
> （自分と同じ格好の人を見ると気まずくなりその場を離れるため。）
>
> 1 見せ 2 = 2
>
> 小さい数字に大きい数字を見せると大きい数字が残る。
> （大きい人を見るとこわくて逃げたくなるため。）
>
> 〈似た形状の数字の組についての応用ルール〉
>
> 6 見せ 9 = 11
>
> （お互いが生き別れの兄弟と勘違いして近づいてしまうため。）
>
> 2 見せ 5 = 1.1
>
> （お互いが生き別れの兄弟と勘違いして近寄るがよく見ると全然違うことに気付きびっくりして携帯「.」を落としてしまうため。）
>
> [EnigmaGAMEIN](https://gamein.enigmahouse.jp/g/sprint-answer/misezan)

### 演算の優先順位

M-1 2023 決勝ネタで演算の優先順位は未定義であったため、
本実装では、見せ算演算は乗除算と同じ優先順位としている。

### 拡張バッカス・ナウア記法による定義

見せ算演算子を `👁️` とすると、五則演算の構文は以下のような定義になる。

```
TERM
    = NUMBER
    = ('+' | '-') TERM
    = '(' EXP ')'

FACTOR
    = TERM
    = FACTOR ('*' | '/' | '👁️') TERM

EXP
    = FACTOR
    = EXP ('+' | '-') FACTOR
```
