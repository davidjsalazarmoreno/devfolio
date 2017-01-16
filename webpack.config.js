module.exports = {
  entry: {
    javascript: './src/Bootstrap.tsx',
    html: './src/views/index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader?configFileName=tsconfig.json' },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ]
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
};