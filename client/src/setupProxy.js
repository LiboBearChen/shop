const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      //target: 'http://liboshop.herokuapp.com',
      target: "http://localhost:6060/",
      changeOrigin: true,
    })
  );
};
