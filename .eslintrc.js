module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsc: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    'import/extensions': [
      'error',
      'never',
      {
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'never'],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 'off',
    'import/order': 0,
    // 'import/prefer-default-export': 0,
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['JSXElement'] }],
    'max-len': [1, 120, 2, { ignoreComments: true }],
    'no-console': 'off',
    // 'no-shadow': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-undef': 0,
    'no-useless-constructor': 0,
    'prefer-object-spread': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-indent-props': ['error', 2],
    'react/no-array-index-key': 0,
    'react/no-typos': 0,
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/prop-types': ['error'],
    'react/react-in-jsx-scope': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-cycle': 0,
    // My own
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['off', { extensions: ['.tsx'] }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never'
    }],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'no-restricted-syntax': [
      'error',
      {
        // eslint-disable-next-line max-len
        selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    'no-unused-vars': 'off'
    // 'react/prop-types': 'off'
  }
};
