const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  module: {
    rules: [
      {
        test: /\.(?:scss)$/i,
        use: [
          {
            loader: '@frota/core.lib.webpack.convert-url-to-base64-inline'
          }
        ],
      },
    ],
  },
  // resolveLoader: {
  //   alias: {
  //     'convert-from-url-to-base64-inline': path.resolve(__dirname, 'custom-loader.js'),
  //   },
  // },
  output: {
    uniqueName: "projectMfe3",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        name: "projectMfe3",
        filename: "OutroMfeEntry.js",
        exposes: {
            './OutroMfeModule': './src/app/outro-mfe/outro-mfe.module.ts',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
