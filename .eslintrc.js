module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 'off',
    'no-unexpected-multiline': 'error',
    'react/prop-types': 'off',
    'react/state-in-constructor': [2, 'never'],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'no-underscore-dangle': ['off'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],
    'react/no-children-prop': [
      0,
      {
        allowFunctions: false,
      },
    ],
    'react/destructuring-assignment': [0, 'always'],
    'react/button-has-type': [
      0,
      {
        button: false,
        submit: false,
        reset: false,
      },
    ],
    'no-shadow': [
      0,
      {
        builtinGlobals: true,
        hoist: 'functions',
        allow: [],
        ignoreOnInitialization: true,
      },
    ],
    'react/no-unescaped-entities': [0, { forbid: ['"'] }],
    'react/jsx-no-constructed-context-values': 0,
    'no-var': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    eqeqeq: 'warn',
    'jsx-a11y/anchor-is-valid': [
      1,
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
