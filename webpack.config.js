var CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path');



module.exports = {
  entry: {
    'app': path.resolve( __dirname, 'src/portfolio/Bootstrap.tsx' )
  },
  // node: {
  //   fs: "empty"
  // },
  output: {
    filename: 'app.js',
    path: path.resolve( __dirname, 'dist/' )
  },

  // https://github.com/kevlened/copy-webpack-plugin/issues/44
  devServer: {
    outputPath: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { 
        test: /\.tsx?$/, loader: 'ts-loader?configFileName=tsconfig.json' 
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style', 'raw')
      },
      { 
        test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?includePaths[]') 
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CopyWebpackPlugin([
      { 
        from: path.resolve( __dirname, 'src/assets' ),
        to: path.resolve( __dirname, 'dist/assets' ) 
      },
      { 
        from: path.resolve( __dirname, 'src/views/index.html' ),
        to: path.resolve( __dirname, 'dist/index.html' ) 
      },
    ]),
    new ExtractTextPlugin( 'styles.css' )
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};