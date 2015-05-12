'use strict';

module.exports = {
  test: {
    'secret': 'metest',
    'url': 'mongodb://localhost/mysite-test'
  },
  production: {
    'secret': 'studentenroll',
    'url': process.env.MONGOLAB_URI
  },
  development: {
    'secret': 'studentenroll',
    'url': 'mongodb://localhost/mysite'
  }
};