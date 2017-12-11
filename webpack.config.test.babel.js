import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'inline-cheap-module-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json']
    },
    plugins: [
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
