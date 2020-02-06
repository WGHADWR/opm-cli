module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'indent': ['error', 2],
    'padded-blocks': 0, // ['error', { 'classes': 'always' }],
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'}],
    'comma-dangle': ['error', 'always-multiline'],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
