const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ["regenerator-runtime/runtime.js", path.join(__dirname, "client/src", "index.jsx")],
    devtool: 'inline-source-map',
    output: { path: path.join(__dirname, "client/build"), filename: "bundle.js" },
    mode: process.env.NODE_ENV || "development",
    // mode: "production",
    resolve: { modules: [path.resolve(__dirname, "client/src"), "node_modules"] },
    devServer: { contentBase: path.join(__dirname, "client/src") },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "client/src", "index.html"),
        }),
    ],
};