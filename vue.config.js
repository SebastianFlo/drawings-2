// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        "/api": {
          target: "https://sebastian.party",
          secure: true,
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  };
