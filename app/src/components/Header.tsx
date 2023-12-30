import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./Icon";
import { buttonVariants } from "./ui/button";

export const Header = () => {
  return (
    <header className="absolute flex px-8 border-b-2 border-gray-100 items-center justify-between w-full h-14 bg-white">
      <div className="flex items-center justify-between gap-8 text-gray-400">
        <nav className="w-auto text-lg font-extrabold tracking-tight text-gray-900">
          <Link href="/">MSZN</Link>
        </nav>
        <nav className="">
          <Link href="/calc">電卓</Link>
        </nav>
        <nav className="">
          <Link href="/make10">make10</Link>
        </nav>
        <nav className="">
          <Link href="/">見せ算について</Link>
        </nav>
      </div>

      <div>
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
        <Link
          href="https://twitter.com/ran350jp"
          target="_blank"
          rel="noreferrer"
        >
          <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}>
            <Icons.twitter className="h-4 w-4 fill-current" />
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
