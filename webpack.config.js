const path = require('path');

module.exports = {
  mode: 'development',
  entry: './code/main.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png$/i,
        type: 'asset/resource'
      },
      {
        test: /\.txt$/i,
        type: 'asset/source'
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname)
    },
    compress: true,
    port: 8080
  }
};
