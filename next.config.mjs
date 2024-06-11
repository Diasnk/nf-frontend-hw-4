import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const reactPath = require.resolve("react");

export default {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: reactPath,
    };
    return config;
  },
};
