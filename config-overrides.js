const {
  injectBabelPlugin
} = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", {
      libraryName: "antd",
      style: true
    }],
    config
  );
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#29b7b7"
    }
  })(config, env);

  // require('react-app-rewire-postcss')(config, true)

  // do stuff with the webpack config...
  return config;
};