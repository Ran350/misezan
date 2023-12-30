import { createTheme } from "@kuma-ui/core";
import { Kosugi_Maru } from "next/font/google";

const theme = createTheme({
  colors: {
    white: "red",
    black: "red",
    navy: "red",
    red: "red",
    yellow: "red",
    shadow: "red",
    background: "red",
  },
  fonts: {
    kosugi_maru: Kosugi_Maru({ subsets: ["latin"], weight: "400" }).style
      .fontFamily,
  },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
