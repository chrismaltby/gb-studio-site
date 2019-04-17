var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require("webpack");
module.exports = {
	entry: {
		app: './js/main.js'
	},
	module: {
		rules: [
			{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
          // plugins: [require('babel-plugin-transform-object-rest-spread')]
        }
      }
    },
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: 'css-loader?importLoaders=1!postcss-loader'
				})
			},
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        use: {
          loader: 'raw-loader'
        }
      },
      {
        test: /\.(glsl|frag|vert)$/,
        exclude: /node_modules/,
        use: {
          loader: 'glslify-loader'
        }
      }
		],
    loaders: [
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ }
    ]    
	},

	output: {
    path: path.join(__dirname, "./../static/dist"),
		filename: '[name].bundle.js',
	},

	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},

	plugins: [
		new ExtractTextPlugin("main.css"),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
	],
	watchOptions: {
		watch: true
	}
}
