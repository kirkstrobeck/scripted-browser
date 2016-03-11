/* global $ */
'use strict';

var $driver = GLOBAL.$driver = require('selenium-webdriver');
require('chromedriver').start({});

GLOBAL.$browser = new $driver
  .Builder()
  .usingServer()
  .withCapabilities({
    'browserName': 'chrome'
  }).build();

try {
  require(__dirname + '/../../../spec/' + $.run);
} catch (e) {
  console.log(e);
}
