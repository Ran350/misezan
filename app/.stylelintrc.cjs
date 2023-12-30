/**
 * @type {import ("stylelint").Config}
 */
module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
    customSyntax: "postcss-styled-syntax",
    rules: {
      "function-no-unknown": [
        true,
        {
          // In Kuma UI, you can use theme tokens with `t` css function.
          ignoreFunctions: ["t"],
        },
      ],
    },
  };