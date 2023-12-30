import { createTheme } from "@kuma-ui/core";

const theme = createTheme({
  colors: {
    white: "#FFF",
    black: "#2F4858",
    navy: "#3F4061",
    red: "#C36883",
    yellow: "#F58A76",
    shadow: "#BABECC",
    background: "#EBECF0",
  },
  // fonts: {
  //   kosugi_maru: Kosugi_Maru({ subsets: ["latin"], weight: "400" }).style
  //     .fontFamily,
  // },
});

type UserTheme = typeof theme;

declare module "@kuma-ui/core" {
  export interface Theme extends UserTheme {}
}

export default theme;
