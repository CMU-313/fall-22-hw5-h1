module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    "eslint:recommended"
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'no-redeclare': ['warn', { "builtinGlobals": true }],
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'no-global-assign': 'warn',
    'no-prototype-builtins': 'warn',
    'no-useless-escape': 'warn',
    'no-fallthrough': 'warn',
    'no-constant-condition': 'warn',
    'no-empty':'warn',
    'no-cond-assign': 'warn',
    'no-control-regex': 'warn',
    'no-self-assign': ["warn", {"props": true}],
    'no-shadow-restricted-names': 'warn',
    'no-mixed-spaces-and-tabs': 'warn'
  },
};
