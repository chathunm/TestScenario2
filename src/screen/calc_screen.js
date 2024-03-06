const { AppiumTestBase } = require('../core/appium_test_base')
const propertiesReader = require('properties-reader');
const path = require("path");
const properties = propertiesReader(path.join(__dirname, '../config/config.properties'));


let methods = {

    pressCalcKey: async function (key) {
        const driver = await AppiumTestBase.getInstance().getDriver()
        const key_value = properties.get(key)
        await driver.$(key_value).click()
        console.log('Pressed Key : ' + key)
    },

    getResults: async function () {
        const driver = await AppiumTestBase.getInstance().getDriver()
        const key_value = properties.get('Result')
        return Number(await driver.$(key_value).getText())
    }
}

exports.data = methods;