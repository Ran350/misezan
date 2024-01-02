import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./Icon";

export const Header = () => {
  return (
    <header className="px-5 md:px-8 border-b-2 border-gray-100 flex items-center gap-2 md:gap-8 w-full h-14 bg-white">
      <nav className="mr-auto font-extrabold tracking-tight text-gray-900">
        <Link href="/">MSZN</Link>
      </nav>

      <nav className="flex gap-2 md:gap-8 text-gray-400 text-sm md:text-base">
        <Link href="/calc">電卓</Link>
        <Link href="/make10">make10</Link>
        <Link href="/#about-misezan">見せ算とは</Link>
      </nav>

      <nav>
        <Link
          href="https://github.com/Ran350/misezan"
          target="_blank"
          rel="noreferrer"
        >
          <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}>
            <Icons.gitHub className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
      </nav>
    </header>
  );
};
