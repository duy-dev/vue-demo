module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("svg")
      .uses.clear()
      .end()
      // Add vue-loader as a loader for Vue single-file components
      // https://www.npmjs.com/package/vue-loader
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      // Add vue-svg-loader as a loader for importing .svg files into Vue single-file components
      // Located in ./vue-svg-loader.js
      .use("./vue-svg-loader")
      .loader("./vue-svg-loader")
      .end();
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};
