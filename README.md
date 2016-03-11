# Scripted Browser

**A local runner for the New Relic Synthetics Scripted Browser**

[![Circle CI](https://circleci.com/gh/kirkstrobeck/scripted-browser.svg?style=svg)](https://circleci.com/gh/kirkstrobeck/scripted-browser)

[New Relic](http://newrelic.com/) came up with a solution for running [Selenium](http://www.seleniumhq.org/) on a scheduled frequency. It also features a performance dashboard and a data-driven SLA. This is a new feature offered under their [Synthecits] monitoring suite called Scripting Monitors. The Selenium runner monitor type is called a “[Scripted Browser](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/write-scripted-browsers#overview).”

Scripted Browser uses a [syntax](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/scripted-browser-examples) for the runner that is unique to New Relic.

```js
//Visit https://docs.newrelic.com
$browser.get("https://docs.newrelic.com");
```

Since Selenium testing is difficult locally, it’s 100X that as a website. I needed a local runner for their syntax, so it could be a copy-paste implementation.

### Usage

```bash
npm install scripted-browser
```

This project has a detailed example in `./example`. To run the example, `cd` into that directory, `npm_install`, and run commands from there.

#### Run

To run a test out of the `./spec` folder

```bash
node node_modules/scripted-browser --run=search-a-website
```
