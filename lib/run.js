/* global $ */
'use strict';

module.exports = function(argv) {

    const $driver = global.$driver = require('selenium-webdriver');
    const $http = require('request');
    const proxy = require('selenium-webdriver/proxy');

    require('chromedriver').start({});

    if(argv && argv.proxy) {
        global.$browser = new $driver
            .Builder()
            .usingServer()
            .withCapabilities({
                'browserName': 'chrome'
            })
            .setProxy(proxy.manual({ http: argv.proxy, https: argv.proxy }))
            .build();
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
