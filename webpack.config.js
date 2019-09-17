'use strict'

const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './dist/lib/index.js',
  output: {
    filename: 'WalletBackendBundle.js',
    library: 'WalletBackend',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  target: 'web',
  plugins: [
    new CopyWebPackPlugin([
      { from: 'node_modules/turtlecoin-utils/lib/turtlecoin-crypto/turtlecoin-crypto-wasm.js', to: 'turtlecoin-crypto-wasm.js' }
    ])
  ]
}
