module.exports = {
  env: {
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "next",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
};
