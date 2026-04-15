// babel.config.js
module.exports = {
  plugins: [
    ['module-resolver', {
      alias: {
        '@services': './src/services',
        '@components': './src/components',
      },
    }],
  ],
};
