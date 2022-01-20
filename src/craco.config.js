const CracoLessPlugin = require('craco-less')
const CracoAlias = require('craco-alias')

module.exports = {
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: './src',
                tsConfigPath: './tsconfig.paths.json',
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#6666FF' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
