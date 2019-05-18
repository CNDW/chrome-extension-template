module.exports = {
  "parser": "@typescript-eslint/parser",
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'standard',
    "plugin:@typescript-eslint/recommended"
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018
  },
  'plugins': [
    'react',
    "@typescript-eslint"
  ],
  'rules': {
    "semi": ["error", "always"],
    quotes: ["error", "single"],
    "@typescript-eslint/no-var-requires": 0
  }
}
