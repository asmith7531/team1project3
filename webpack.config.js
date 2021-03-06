const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path');
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: [
        'react-hot-loader/patch',
        //activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        //bundle the client for webpack dev server
        //and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        //bundle the client for hot reloading
        //only- means to only hot reload for successful updates


        './src/index.js'
        //the entry point of our app
    ],
    output: { // NEW
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    }, // NEW Ends
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        //activate hot reloading

        contentBase: '/dist',
        //match the output path
        publicPath: '/'
        //match the output publicPath
    },
    plugins: [
        htmlPlugin,
        new webpack.HotModuleReplacementPlugin(),
        //activates HMR
        new webpack.NamedModulesPlugin(),
        //prints more readable module names in the browser console on HMR updates
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
        ]
    }

};