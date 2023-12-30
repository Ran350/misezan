import { styled } from "@kuma-ui/core";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";
import type { Metadata } from "next";

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
      <BodyStyle>
        <KumaRegistry>{children}</KumaRegistry>
      </BodyStyle>
    </html>
  );
}

const BodyStyle = styled.body`
  body {
    font-family: arial, sans-serif;
    background-color: t("colors.background");
    padding: 0;
    margin: 0;
    max-height: 100vh;
    font-size: 16px;
  }
`;
