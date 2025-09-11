const path = require('path');

module.exports = {
  entry: './js/main.ts', // 👈 your TypeScript entry file
  mode: 'development',   // or 'production' for final builds
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
