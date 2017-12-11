import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index'),
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true,
            noInfo: false
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false
        })
    ],
    module: {
        loaders: [
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
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: 'vue-style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.svg$/,
                use: 'html-loader'
            },
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