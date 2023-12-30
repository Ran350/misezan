import { Metadata } from "next";
import Make10Card from "./_components/Make10Card";

export const metadata: Metadata = {
  title: "見せ算 make10 | MSZN",
  description: "さや香のM-1決勝ネタ「見せ算」を用いて make10 を解くツール",
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <main className="flex items-center justify-center w-full">
        <Make10Card />
      </main>
    </div>
  );
}
