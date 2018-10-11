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

global.$browser.waitForAndFindElement = function(selector, waitingTime){
    let ms = waitingTime;
    if(!waitingTime) {
        ms = 1000;
    }

    return global.$browser.wait(global.$driver.until.elementLocated(selector), ms);
};

try {
    require(__dirname + '/../../../spec/' + $.run);
} catch (e) {
    console.log(e);
}
