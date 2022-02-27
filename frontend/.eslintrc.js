module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        allowFirstLine: true,
        max: 1
      },
      multiline: {
        allowFirstLine: true,
        max: 1
      }
    }],
    // 'vue/first-attribute-linebreak': ['error', {
    //   singleline: 'beside',
    //   multiline: 'beside'
    // }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
