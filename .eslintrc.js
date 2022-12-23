module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    plugins: ['simple-import-sort'],
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/airbnb',
        '@vue/typescript/recommended',
        // Make sure "prettier" is the last element in this list.
        // Inorder to solve conflicting with the shareable config provided by this plugin.
        'prettier'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-var-requires': 0,
        'no-useless-escape': 0,
        'vue/html-indent': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-param-reassign': [
            'error',
            {
                prop: true,
                ignorePropertyModificationsFor: ['state']
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
};
