import type { Metadata } from "next";

import { Header } from "@/app/_component/Header";
import { Footer } from "./_component/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "さや香のネタ「見せ算」の計算サイト| MSZN",
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
      <body className="m-0 p-0 font-arial font-sans text-base bg-gray-50 min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
