'use strict';
const env = process.env.NODE_ENV === 'development'
    ? 'production'
    : process.env.NODE_ENV;
const utils = require('./utils');
const config = require('../config');

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config[env].productionSourceMap,
    extract: env === 'production',
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
