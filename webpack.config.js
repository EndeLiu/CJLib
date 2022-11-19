const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main/demo.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cjLib.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, './tsconfig.json'),
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.json'],
  },
};
