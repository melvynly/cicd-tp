module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    // add custom rules or overrides here, e.g.:
    // "no-console": "warn"
  }
};
