module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:prettier/recommended',
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console':
            process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger':
            process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        // custom
        indent: 'off',
        '@typescript-eslint/indent': ['off'],
        'prettier/prettier': 'off',
        'space-before-function-paren': 'off',
        '@typescript-eslint/space-before-function-paren': ['off']
    }
}
