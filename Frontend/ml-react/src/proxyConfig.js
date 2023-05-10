const proxyConfig = {
  "/api1": {
    target: "http://localhost:8000",
    changeOrigin: true,
  },
};

module.exports = proxyConfig;
