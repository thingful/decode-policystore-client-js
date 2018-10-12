var path = require('path');

module.exports = {
  entry: './src/policystore_pb_twirp.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'decode-policystore-client.js',
    library: 'decodePolicyStore'
  }
};
