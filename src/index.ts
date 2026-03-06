import eslintOverride from "./overrides/eslint/index.js";
import jsonOverride from "./overrides/json/index.js";
import typescriptOverride from "./overrides/typescript/index.js";

const config = {
  env: {
    browser: false,
    node: true
  },
  overrides: [
    eslintOverride,
    typescriptOverride,
    jsonOverride
  ]
};

module.exports = config;
