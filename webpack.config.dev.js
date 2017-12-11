import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                include: [path.join(__dirname, 'src')],
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'src')],
                use: 'babel-loader'
            },
            {test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
            {test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader']},
            {test: /\.svg$/, use: ['html-loader']},
            {
                test: /\.(jpe?g|ico|gif|png|eot|woff|woff2|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[path][name].[hash].[ext]'}
                }]
            }
        ]
    }
};
