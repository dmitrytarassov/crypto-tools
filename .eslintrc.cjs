module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "import/no-unresolved": "off",
    "import/named": "off",
    "no-async-promise-executor": "off",
    "import/order": [
      1,
      {
        groups: [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
    sourceType: "module",
    ecmaVersion: 2021,
  },
  ignorePatterns: ["*.cjs", "**/*.spec.ts"],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
}
