module.exports = {
  env: {
    browser: true,
    es2022: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb/rules/react',
    'plugin:prettier/recommended',
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
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".svg"] }],
  },
};
