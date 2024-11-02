import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import requireSpecificInterface from './eslint-rules/require-specific-interface'; // Adjust path as necessary

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js: pluginJs,
      typescript: tseslint,
      react: pluginReact,
    },
    rules: {
      'require-specific-interface': ['warn', 'MySpecificType'], 
      "prettier/prettier": "error",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

// Register your custom rule
export const rules = {
  'require-specific-interface': requireSpecificInterface,
};
