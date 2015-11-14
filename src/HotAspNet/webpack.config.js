var webpack = require('webpack');
var path = require('path');

var outFolder = path.resolve(__dirname, "./wwwroot/app");
var isProduction = process.env.NODE_ENV === 'production ';
var jsxLoaders = isProduction ? ['babel?presets[]=es2015,presets[]=react'] : ['react-hot', 'babel?presets[]=es2015,presets[]=react'];
var app = isProduction ? ['./app/app.jsx'] : [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './app/app.jsx' // Your app?s entry point
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: outFolder,
        filename: "[name].js",
        publicPath: 'http://localhost:3000/app/'
    },
    devtool: "eval",
    minimize: true,
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: jsxLoaders,
            exclude: /node_modules/
        },
        {
            test: /\.(css|less)$/,
            loaders: ['style','css','less']
        }]
    },
    'uglify-loader': {
        mangle: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },
    devServer: {
        headers: { "Access-Control-Allow-Origin": "*" }
    }
};
