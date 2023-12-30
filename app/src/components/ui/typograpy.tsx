import { ReactNode } from "react";

export function TypographyH1(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${
        props.className || ""
      }`}
    >
      {props.children}
    </h1>
  );
}

export function TypographyH2(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${
        props.className || ""
      }`}
    >
      {props.children}
    </h2>
  );
}

export function TypographyH4(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${
        props.className || ""
      }`}
    >
      {props.children}
    </h4>
  );
}

export function TypograpyCode(props: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`scroll-m-20 text-base font-mono text-gray-500 italic rounded-md px-1 ${
        props.className || ""
      }`}
    >
      {props.children}
    </p>
  );
}
