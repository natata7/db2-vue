const path = require('path');

module.exports = {
  css: {
    requireModuleExtension: false,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/styles/styles.scss'),
      ],
    },
  },
};
