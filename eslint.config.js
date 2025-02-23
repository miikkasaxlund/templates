module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended', // Enable recommended ESLint rules
    'plugin:@typescript-eslint/recommended', // Enable recommended TypeScript rules
    'plugin:react/recommended', // Enable recommended React rules
    'plugin:react-hooks/recommended', // Enable React hooks rules
    'plugin:prettier/recommended', // Integrate Prettier for formatting rules
  ],
  rules: {
    // Custom rules for the project
    'no-console': 'warn', // Warn on console logs
    'no-debugger': 'warn', // Warn on debugger statements
    'react/prop-types': 'off', // TypeScript handles type checking
    'react/react-in-jsx-scope': 'off', // React is automatically in scope with Next.js or recent versions
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional in TypeScript
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on `any` usage
    'prettier/prettier': 'error', // Enforce Prettier formatting
    'semi': ['error', 'always'], // Require semicolons
    'quotes': ['error', 'single'], // Prefer single quotes for strings
    'eqeqeq': 'error', // Enforce strict equality (===)
    'react/jsx-uses-react': 'off', // JSX no longer requires React in scope
    'react/jsx-uses-vars': 'error', // Ensure variables are used in JSX
  },
};
