/* global $ */
'use strict';

let $driver = global.$driver = require('selenium-webdriver');
require('chromedriver').start({});

global.$browser = new $driver
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
