module.exports = {
  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#extending-configuration-files
  extends: [
    'airbnb',
    // https://github.com/typescript-eslint/typescript-eslint/tree/c5835f332c4c63af778b4064a6c524840deb690b/packages/eslint-plugin#usage
    // @typescript-eslint/eslint-plugin を有効にし、@typescript-eslint/parser も設定してくれる。
    'plugin:@typescript-eslint/recommended',
    // https://github.com/prettier/prettier/blob/1a419c0ddff61a70321c168f47e91ce0ca582340/docs/integrating-with-linters.md#recommended-configuration
    // eslint-plugin-prettier を有効にし、eslint-config-prettier を extends してくれる。
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#specifying-environments
  env: {
    browser: true,
    es6: true,
  },

  // https://github.com/eslint/eslint/blob/45aa6a3ba3486f1b116c5daab6432d144e5ea574/docs/user-guide/configuring.md#configuring-plugins
  plugins: ['react', 'react-hooks', 'sort-imports-es6-autofix'],

  rules: {
    // Enable
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'func-names': ['error'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-case-declarations': ['error'],
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-no-target-blank': ['error'],
    'react/sort-comp': ['error'],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],

    // Disable
    '@typescript-eslint/camelcase': ['off'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    '@typescript-eslint/no-explicit-any': ['off'], // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/explicit-function-return-type': ['off'], // 関数の戻り値は明記すべき
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-unresolved': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/prefer-default-export': ['off'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/order': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/accessible-emoji': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
    'jsx-a11y/control-has-associated-label': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
    'jsx-a11y/click-events-have-key-events': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/label-has-associated-control': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    'jsx-a11y/media-has-caption': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    'jsx-a11y/mouse-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-static-element-interactions': ['off'], // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'default-case': ['off'], // https://eslint.org/docs/rules/default-case
    'max-classes-per-file': ['off'], // https://eslint.org/docs/rules/max-classes-per-file
    'no-bitwise': ['off'], // https://eslint.org/docs/rules/no-bitwise
    'no-nested-ternary': ['off'], // https://eslint.org/docs/rules/no-nested-ternary
    'no-plusplus': ['off'], // https://eslint.org/docs/rules/no-plusplus
    'no-return-assign': ['off'], // https://eslint.org/docs/rules/no-return-assign
    'no-shadow': ['off'], // https://eslint.org/docs/rules/no-shadow-restricted-names
    'no-throw-literal': ['off'], // https://eslint.org/docs/rules/no-throw-literal
    'no-unused-expressions': ['off'], // https://eslint.org/docs/rules/no-unused-expressions#top
    'sort-imports': ['off'],
    'react/button-has-type': ['off'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
    'react/jsx-indent': ['off'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-props-no-spreading': ['off'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/no-array-index-key': ['off'], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
  },
};
