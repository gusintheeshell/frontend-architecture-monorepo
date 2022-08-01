module.exports = {
  extends: ["eslint:recommended", "next", "plugin:prettier/recommended"],
  rules: {
    "no-console": "error",
    "@next/next/no-html-link-for-pages": "off",
  },
};
