// @ts-check

import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["out", "node_modules", ".next", "public"],
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
  reactHooks.configs["recommended-latest"],
  tseslint.configs.strict,
  {
    files: ["**/*.tsx"],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      "react/jsx-key": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      // @ts-expect-error this works but the types seem off
      "@next/next": nextPlugin,
      react: reactPlugin,
    },
    // @ts-expect-error I have no idea why Next plugin types are bad with ESLint 9
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/triple-slash-reference": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          ignoreRestSiblings: true,
        },
      ],

      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
    },
  }
);
