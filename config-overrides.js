const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@/services": path.resolve(__dirname, "src/shared/services"),
      "@/interfaces": path.resolve(__dirname, "src/shared/interfaces"),
      "@/pages": path.resolve(__dirname, "src/shared/pages"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/contexts": path.resolve(__dirname, "src/contexts"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/fonts": path.resolve(__dirname, "src/fonts"),
      "@/shared": path.resolve(__dirname, "src/shared"),
      "@/styles": path.resolve(__dirname, "src/styles"),
    },
  };

  return config;
};
