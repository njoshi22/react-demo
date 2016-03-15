module.exports = {
    entry: './app/app.js',
    output: {
      filename: 'public/bundle.js',
      publicPath: '/'
    },
    devServer: {
      inline: true,
      contentBase: "./public/"
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['react','es2015']
          }
        }
      ]
    }
};
