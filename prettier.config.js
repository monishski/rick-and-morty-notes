/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  endOfLine: "lf",
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/store(/?.*)$",
    "^@/features(/?.*)$",
    "^@/api(/?.*)$",
    "^@/components(/?.*)$",
    "^@/hooks(/?.*)$",
    "^@/utils(/?.*)$",
    "^@/config(/?.*)$",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: false,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

export default config;
