const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'sourcemap',
    entry: {
        background: './src/background.ts',
        main: './src/main.ts',
        popup: './src/popup.ts',
        inject: './src/inject.ts'
    },
    output: {
        path: path.resolve(__dirname, 'static/build')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devServer: {
        contentBase: './sample-page',
        writeToDisk: true,
        compress: true,
        hot: false,
        inline: false,
        port: 3002
    }
};
