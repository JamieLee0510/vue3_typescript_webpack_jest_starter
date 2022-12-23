module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: '3.0.0',
                modules: false,
                targets: {
                    node: 5
                }
            }
        ]
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import']
};
