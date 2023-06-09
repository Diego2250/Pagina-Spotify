module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  "env": {
    "jest": true,
    "browser": true
  },
  rules: {
    'semi':['error','never'],
    'max-len':['error',{ 'code':120}],
    'prefer-arrow-callback': 'error',
    'quotes': ['error', 'double'],
    'react/function-component-definition': 'off'
  },
};
