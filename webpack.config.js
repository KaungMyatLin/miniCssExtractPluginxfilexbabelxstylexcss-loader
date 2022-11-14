const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
console.log("node env is not present in PROCESS.ENV.NODE_ENV %%%%%%%%%%%%%%%%%%%%%%%%%%: ")
console.log(process.env)

module.exports = (env, argv) => {
    console.log("webpackEnv%%%%%%%%%%%%%%%%%%%%%%%: ")
    console.log(argv.mode)
    // console.dir(env)
    // console.dir(argv)
    return {
        entry: './src',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js/,
                    loader: 'babel-loader',
                    include: __dirname + '/src',
                },
                {
                    test: /\.css$/,
                    use: [
                        // 'style-loader',              // style loader adds style link('s if more than one imports) onto html head.
                        MiniCssExtractPlugin.loader,    // instead of style-loader.
                        'css-loader' ,
                    ]
                },
                {
                    test: /\.svg$/,
                    use: "file-loader",
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin(),
        ],
    }
}