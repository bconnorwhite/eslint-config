const test = require("node:test");
const assert = require("node:assert/strict");

const config = require("../build/index.js");
const nodeConfig = require("../build/node.js");
const reactConfig = require("../build/react.js");

test("exports an eslint config object", () => {
  assert.equal(typeof config, "object");
  assert.equal(config.env.browser, false);
  assert.equal(config.env.node, true);
  assert.ok(Array.isArray(config.overrides));
});

test("exports node and react entry points", () => {
  assert.equal(nodeConfig.env.browser, false);
  assert.equal(nodeConfig.env.node, true);
  assert.equal(reactConfig.env.browser, true);
  assert.equal(reactConfig.env.node, true);
});
