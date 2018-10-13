const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/policystore_pb_twirp.js',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'decode-policystore.bundle.js',
    library: 'decodePolicyStore',
    libraryTarget: 'umd'
  }
};
