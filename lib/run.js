/* global $ */
'use strict';

module.exports = function(argv) {

    let $driver = global.$driver = require('selenium-webdriver');
    let $http = require('request');

    require('chromedriver').start({});

    if(argv && argv.proxy) {
        global.$browser = new $driver
            .Builder()
            .usingServer()
            .withCapabilities({
                'browserName': 'chrome'
            }).setProxy(argv.proxy).build();
    } else {
        global.$browser = new $driver
            .Builder()
            .usingServer()
            .withCapabilities({
                'browserName': 'chrome'
            }).build();
    }

    global.$browser.waitForAndFindElement = function (selector, waitingTime) {
        let ms = waitingTime;
        if (!waitingTime) {
            ms = 1000;
        }

        return global.$browser.wait(global.$driver.until.elementLocated(selector), ms);
    };

    global.$http = $http;

    try {
        require(__dirname + '/../../../spec/' + $.run);
    } catch (e) {
        console.log(e);
    }

};
