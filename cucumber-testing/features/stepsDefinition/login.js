const {Given, When, Then, After, Before} = require("@cucumber/cucumber")
const {Builder, By, until}= require("selenium-webdriver")
const assert = require("assert")
let driver;
Before(async function(){
    driver = await new Builder().forBrowser("chrome").build();
})
Given ("I navigate to the register page", async function(){
    await driver.get("http://localhost:4200/")
});

When ("I enter valid email and password", async function () {
    const email1 = await driver.findElement(By.id("email")); 
    const password1 = await driver.findElement(By.id("password")); 
    await email1.sendKeys("loc@gmail.com");
    await password1.sendKeys("loc298");
});

When ("I click on the register button for success", async function(){
    const button1 = await driver.findElement(By.id("submit"));
    await button1.click();
});

Then("I should be redirected to home page", async function() {
    await driver.wait(until.urlContains(''), 4000); 
    const currentURL = await driver.getCurrentUrl();
    assert.ok(currentURL.endsWith('/')); 
});

When ("I enter invalid email and password", async function(){
    const email1 = await driver.findElement(By.id("email")); 
    const password1 = await driver.findElement(By.id("password")); 
    await email1.sendKeys("loc@gmail.com");
    await password1.sendKeys("loc298");
});

Then("The submit button should not be available", async function () {
    const submitButton = await driver.findElement(By.id("submit"));
    const isDisabled = await submitButton.getAttribute("disabled");
    assert.strictEqual(isDisabled, "true", "The submit button should be disabled for invalid inputs.");
});



After(async function() {
    if (driver) {
        await driver.quit(); 
    }
});