const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://liboshop.herokuapp.com',
            changeOrigin: true,
        })
    );
};