import type { Metadata } from "next";

import { Header } from "@/components/Header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "見せ算👁️計算機",
  description:
    "さや香のM-1決勝ネタ「見せ算」のルールに対応した五則演算計算機。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="max-h-screen p-0 m-0 font-arial font-sans text-base bg-whiteGray">
        <Header />
        {children}
      </body>
    </html>
  );
}
