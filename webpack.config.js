const path = require("path");
const Dotenv = require("dotenv-webpack");

var HtmlWebpackPlugin = require("html-webpack-plugin");
let htmlPageNames = [
  "index",
  "main",
  "forms",
  "form",
  "upload",
  "admin",
  "viewform",
  "createform"
];

let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}`], // respective JS files
  });
});
const webpackConfig = {
  mode: "production",

  entry: {
    index: "./src/index.js",
    main: "./src/main.js",
    forms: "./src/forms.js",
    form: "./src/form.js",
    upload: "./src/upload.js",
    admin: "./src/admin.js",
    viewform: "./src/viewform.js",
    createform: "./src/createform.js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  devtool: process.env.SOURCE_MAP ? "" : "hidden-source-map",

  plugins: [
    new Dotenv(),
    
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: 'head',


      excludeChunks: ["main", "forms", "form", "upload", "admin", "viewform", "createform"],
    }),
  ].concat(multipleHtmlPlugins),
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
        
      },
    ],
  },
};


if (process.env.DEVELOPMENT==false) {
  var WebpackObfuscator = require("webpack-obfuscator")

  webpackConfig.plugins.push(new WebpackObfuscator ({
    rotateStringArray: true
  }));
}
else{

}

module.exports = webpackConfig