# MSZN Project

[さや香の M-1 2023 決勝ネタ](https://lemino.docomo.ne.jp/?crid=Y3JpZDovL3BsYWxhLmlwdHZmLmpwL3ZvZC8wMDAwMDAwMDAwX2wwbHFhdGRjbnQ%3D)「見せ算」に対応したツールセットを開発するプロジェクト。

- [mszn.vercel.app](https://mszn.vercel.app/): 見せ算電卓や見せ算make10を提供するWebサイト
- [@ran350/misezan](./packages/misezan): 見せ算を評価する関数を提供する npm package

## ディレクトリ構成

```
.
├── app # mzsn.vercel.app 用 Next.js アプリケーション
├── packages
│   ├── misezan # @ran350/misezan package
│   ├── make10 # make10 puzzle package
│   ├── eslint-config # 共有 eslint config
│   └── typescript-config # 共有 tsconfig package
 ⋮
```
