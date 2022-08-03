const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPluguin = require("copy-webpack-plugin");



module.exports = {

    mode: 'development',

    output: {
        clean:true

    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }

            },

            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]

            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title:'Mi webpack App',
            //filename: 'index.html',
            template: './src/index.html'

        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPluguin({
            patterns: [ 
                {from:'src/assets/', to: 'assets/'}
            ]
         }
        
            )
    ]
}
