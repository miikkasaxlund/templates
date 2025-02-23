module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // Custom rules for the project
    "no-console": "warn", // Warn on console logs
    "no-debugger": "warn", // Warn on debugger statements
    "react/prop-types": "off", // TypeScript handles type checking
    "react/react-in-jsx-scope": "off", // React is automatically in scope with Next.js or recent versions
    "@typescript-eslint/explicit-module-boundary-types": "off", // Optional in TypeScript
    "@typescript-eslint/no-explicit-any": "warn", // Warn on `any` usage
    "prettier/prettier": "error", // Enforce Prettier formatting
    semi: ["error", "always"], // Require semicolons
    quotes: ["error", "single"], // Prefer single quotes for strings
    eqeqeq: "error", // Enforce strict equality (===)
    "react/jsx-uses-react": "off", // JSX no longer requires React in scope
    "react/jsx-uses-vars": "error", // Ensure variables are used in JSX

    /**
     * Eslint - Possible Problems
     * https://eslint.org/docs/latest/rules/#possible-problems
     */
    "array-callback-return": "error",
    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-duplicate-imports": "error",
    "no-inner-declarations": "error",
    "no-promise-executor-return": "error",
    "no-self-compare": "error",
    "no-unreachable-loop": "error",
    "no-use-before-define": "error",
    "no-useless-assignment": "error",
    "require-atomic-updates": "error",

    /**
     * Eslint - Suggestions
     * https://eslint.org/docs/latest/rules/#suggestions
     */
    "arrow-body-style": ["error", "as-needed"],
    camelcase: [
      "error",
      {
        allow: ["^UNSAFE_"],
        ignoreDestructuring: true,
        ignoreGlobals: true,
        ignoreImports: true,
        properties: "always",
      },
    ],
    "capitalized-comments": [
      "error",
      "always",
      {
        ignoreConsecutiveComments: true,
        ignoreInlineComments: true,
      },
    ],
    "class-methods-use-this": "error",
    complexity: ["error", 10],
    curly: ["error", "multi-or-nest"],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "always"],
    "guard-for-in": "error",
    "id-denylist": [
      "error",
      "data",
      "err",
      "e",
      "cb",
      "callback",
      "temp",
      "value",
      "foo",
      "bar",
      "obj",
      "num",
    ],
    "max-classes-per-file": ["error", 1],
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-lines-per-function": [
      "error",
      {
        max: 20,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-nested-callbacks": ["error", 3],
    "max-params": ["error", 3],
    "max-statements": ["error", 15],
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": "warn",
    "no-continue": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: true,
      },
    ],
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-object-constructor": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-ternary": "warn",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "warn",
    "object-shorthand": "error",
    "operator-assignment": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-exponentiation-operator": "warn",
    "prefer-named-capture-group": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-has-owned": "error",
    "prefer-object-spread": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "require-await": "error",
    "require-unicode-regexp": "warn",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        ignoreComputedKeys: true,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: true,
        allowLineSeparatedGroups: true,
      },
    ],
    "sort-keys": [
      "error",
      "asc",
      { caseSensitive: true, natural: true, minKeys: 2 },
    ],
    yoda: "error",

    /**
     * TypeScript Eslint - Stylistic
     * https://typescript-eslint.io/rules/
     */
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    //"@typescript-eslint/consistent-type-assertions": "error",
    //"@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/prefer-find": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
  },
};
