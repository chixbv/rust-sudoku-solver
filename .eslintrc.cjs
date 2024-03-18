module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unstable-nested-components": "off", // "off" for legacy but it might be nice to accept the rule in the future
    "@typescript-eslint/prefer-optional-chain": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ["react"],
        groups: [
          ["type", "builtin", "external"],
          ["internal", "parent", "sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["."],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.tsx", "**/*.ts"],
      rules: {
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "no-underscore-dangle": ["error", { allow: ["__typename"] }],
      },
    },
    {
      files: ["public/scripts/**"],
      rules: {
        "@typescript-eslint/prefer-optional-chain": "off",
        "no-restricted-globals": "off",
        "prefer-destructuring": "off",
      },
    },
  ],
};
