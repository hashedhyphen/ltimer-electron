module.exports = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
      jsx: true
    }
  },

  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true,
    serviceworker: true,
    webextensions: true
  },

  plugins: [ 'react' ],

  extends: 'plugin:react/recommended',

  rules: {
    // Possible Errors
    'comma-dangle': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-control-regex': 1,
    'no-debugger': 1,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 1,
    'use-isnan': 2,
    'valid-jsdoc': 2,
    'valid-typeof': 2,

    // Best Practices
    'array-callback-return': 2,
    'complexity': [ 1, 4 ],
    'consistent-return': 2,
    'curly': 2,
    'default-case': 2,
    'eqeqeq': 2,
    'guard-for-in': 2,
    'no-alert': 1,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-invalid-this': 2,
    'no-multi-spaces': 0,
    'no-octal': 2,
    'no-self-assign': 2,
    'no-unused-labels': 2,

    // Strict Mode
    'strict': 0,

    // Variables
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': 1,
    'no-use-before-define': 2,

    // Node.js and CommonJS
    'handle-callback-err': [ 2, 'err' ],

    // Stylistic Issues
    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': [ 2, 'always' ],
    'brace-style': [ 1, '1tbs', {
      allowSingleLine: true
    } ],
    'camelcase': 2,
    'comma-spacing': 2,
    'computed-property-spacing': [ 2, 'never' ],
    'func-style': [ 2, 'expression', {
      allowArrowFunctions: true
    } ],
    'indent': [ 2, 2, {
      VariableDeclarator: { let: 2, const: 4 },
      SwitchCase: 1
    } ],
    'jsx-quotes': [ 2, 'prefer-double' ],
    'key-spacing': [ 2, {
      mode: 'minimum'
    } ],
    'no-mixed-spaces-and-tabs': 2,
    'no-plusplus': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'backtick' ],
    'semi': 2,

    // ECMAScript6
    'arrow-body-style': [ 2, 'as-needed' ],
    'arrow-parens': [ 2, 'as-needed' ],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': [ 2, 'always' ],
    'prefer-const': 1
  }
}
