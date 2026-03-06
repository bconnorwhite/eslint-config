<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>@bconnorwhite/eslint-config</h1>
  <a href="https://npmjs.com/package/@bconnorwhite/eslint-config">
    <img alt="npm" src="https://img.shields.io/npm/v/@bconnorwhite/eslint-config.svg">
  </a>
  <a href="https://github.com/bconnorwhite/eslint-config">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/eslint-config.svg">
  </a>
</div>

<br />

<blockquote align="center">Shared ESLint configuration.</blockquote>

---
<!--END HEADER-->

<!-- BEGIN INSTALLATION -->
## Installation

<details open>
  <summary>
    <a href="https://www.npmjs.com/package/@bconnorwhite/eslint-config">
      <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="NPM" />
    </a>
  </summary>

```sh
npm install @bconnorwhite/eslint-config
```

</details>

<details>
  <summary>
    <a href="https://yarnpkg.com/package/@bconnorwhite/eslint-config">
      <img src="https://img.shields.io/badge/yarn-2C8EBB?logo=yarn&logoColor=white" alt="Yarn" />
    </a>
  </summary>

```sh
yarn add @bconnorwhite/eslint-config
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white" alt="PNPM" />
  </summary>

```sh
pnpm add @bconnorwhite/eslint-config
```

</details>

<details>
  <summary>
    <img src="https://img.shields.io/badge/bun-EE81C3?logo=bun&logoColor=white" alt="Bun" />
  </summary>

```sh
bun add @bconnorwhite/eslint-config
```

</details>
<!-- END INSTALLATION -->

A base for projects that use ESLint.

## Usage

In your `eslint.config.mjs` file:

**TypeScript**

This is a generic config for projects that use TypeScript.

```js
import config from "@bconnorwhite/eslint-config";

export default config;
```

**Node**

The `node` config extends the `typescript` config and adds rules for Node.js.

```js
import config from "@bconnorwhite/eslint-config/node";

export default config;
```

**React**

The `react` config extends the `typescript` config and adds rules for React.

```js
import config from "@bconnorwhite/eslint-config/react";

export default config;
```

<!--BEGIN FOOTER-->
<h2>Peer Dependencies</h2>

- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin): TypeScript plugin for ESLint
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser): An ESLint custom parser which leverages TypeScript ESTree
- [eslint](https://www.npmjs.com/package/eslint): An AST-based pattern checker for JavaScript.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Import with sanity.
- [eslint-plugin-json](https://www.npmjs.com/package/eslint-plugin-json): eslint plugin for JSON files
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n): Additional ESLint's rules for Node.js
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): React specific linting rules for ESLint
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): ESLint rules for React Hooks
- [typescript](https://www.npmjs.com/package/typescript): TypeScript is a language for application scale JavaScript development

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@bconnorwhite/eslint-config.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT) - _MIT License_
<!--END FOOTER-->
