module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  rules: {
    camelcase: ['warn', { properties: 'never' }],
    semi: ['error', 'never'],
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          ts: 'never',
          js: 'never',
        },
      },
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
  },
}
