/*

The following is the “Search a website” example from
https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/scripted-browser-examples

*/
/* eslint-disable */
$browser.get("https://docs.newrelic.com").then(function(){
//Find the search field by specifying its id, then enter `shirt`.
    return $browser.findElement($driver.By.id("edit-search-block-form--2")).sendKeys("tshirt");
}).then(function(){
//Click the search button.
    return $browser.findElement($driver.By.id("edit-submit")).click();
});
/* eslint-enable */
