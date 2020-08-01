const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/router',
    createProxyMiddleware({
      target: 'http://172.31.65.74:4000',
      changeOrigin: true,
    })
  );
};
