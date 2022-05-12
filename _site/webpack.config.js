const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './app.js'),
  output: {
    path: path.resolve(__dirname, 'assets', 'js'),
    filename: 'main.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
