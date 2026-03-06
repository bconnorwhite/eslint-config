import type { Linter } from "eslint";
import rules from "./typescript.js";

const override: Linter.ConfigOverride = {
  files: ["*.ts", "*.tsx"],
  extends: [
    "plugin:@typescript-eslint/strict-type-checked"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: true,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false
  },
  plugins: [
    "@typescript-eslint"
  ],
  rules
};

export default override;
