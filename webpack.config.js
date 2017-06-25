module.exports = {
  entry: './src/client.js',
  output: {
    path: '/Users/ssavla/Documents/IAmSohil/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json']
  }
};
