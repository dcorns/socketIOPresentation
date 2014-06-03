var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'lightning'
    },
    port: 3000,
    db: 'mongodb://localhost/lightning-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'lightning'
    },
    port: 3000,
    db: 'mongodb://localhost/lightning-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'lightning'
    },
    port: 3000,
    db: 'mongodb://localhost/lightning-production'
  }
};

module.exports = config[env];
