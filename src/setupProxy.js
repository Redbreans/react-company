const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { target: 'http://192.167.1.20:20000/talent-aeaa-online-server' }));
};