module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    jest: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "prefer-const": "error",
    "prefer-arrow-callback": "error",
    "react/jsx-uses-vars": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
