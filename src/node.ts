import eslintOverride from "./overrides/eslint/index.js";
import jsonOverride from "./overrides/json/index.js";
import nodeRules from "./overrides/node/eslint-plugin-n.js";
import typescriptOverride from "./overrides/typescript/index.js";

const nodeOverride = {
  files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
  extends: [
    "plugin:n/recommended"
  ],
  rules: {
    ...nodeRules
  },
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
    "n"
  ],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx"
      ]
    }
  }
};

const config = {
  env: {
    browser: false,
    node: true
  },
  overrides: [
    eslintOverride,
    typescriptOverride,
    nodeOverride,
    jsonOverride
  ]
};

module.exports = config;
