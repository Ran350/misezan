export const operator = {
  plus: "+",
  minus: "-",
  times: "*",
  divide: "/",
  mise: "👁️",
} as const;

export type Operator = (typeof operator)[keyof typeof operator];
