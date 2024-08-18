const path = require('path');

module.exports = {
  entry: './app/main.js',  // Entry point where Webpack starts bundling
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'public/js')  // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Apply this rule to .js files
        exclude: /node_modules/,  // Exclude node_modules from transpilation
        use: {
          loader: 'babel-loader',  // Use Babel to transpile JavaScript files
          options: {
            presets: ['@babel/preset-env']  // Use the preset-env preset
          }
        }
      }
    ]
  },
  mode: 'development'  // Set the mode to development
};
