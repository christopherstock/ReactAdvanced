var path = require('path');

module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    filename: 'bundle.jsx',
    path:     path.resolve(__dirname, 'dist/js')
  },
  devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.ts$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.jsx'
      ]
    },
    devServer:
    {
      inline: true
    }
};
