const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        courses: './src/pages/courses.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module:{
        rules: [
            {
              test: /\.(css)$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { modules: true } },
              ],
            },
            {
              test: /.s[ac]ss$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader", options: { modules: true } },
                { loader: "sass-loader" },
              ],
            },
            {
              test: /.(png|jpeg|gif|svg)$/,
              type: "asset/resource",
            },
            {
              test: /.(ttf|woff|woff2)$/,
              type: "asset/resource",
            },
          ],
    }
}