module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'padded-blocks': ['error', { classes: 'always' }],
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
  },
  parser: 'babel-eslint',
};
