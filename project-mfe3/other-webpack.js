// var merge = require('webpack-merge');
// var webpack = require('webpack');
const path = require('path');
exports.default = {
  // pre: (options) => {
  //   console.debug('pre', options);
  // },
  config: (cfg) => {

    cfg.module.rules.forEach((rule, index) => {
      console.log(`test ${index}\n`,rule.test.toString());
    });
    // console.debug('========CFG', JSON.stringify(cfg.module, null, 2))
    return cfg;
  },
  // post: (options) => {
  //   console.debug('post', options);
  // }
  // config: function(cfg) {
  //   const strategy = merge.strategy({
  //     'plugins': 'prepend'
  //   });
  //
  //   return strategy (cfg, {
  //     plugins: [
  //       new webpack.DefinePlugin({
  //         "VERSION": JSON.stringify("4711")
  //       })
  //     ]
  //   });
  // }
}
