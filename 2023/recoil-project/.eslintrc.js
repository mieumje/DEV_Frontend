module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings', // eslint-plugin-import
    'plugin:react/recommended', // eslint-plugin-react
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'comma-dangle': 0,
    'no-unused-vars': 1,
    'import/no-unresolved': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'consistent-return': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': [0],
  },
};
