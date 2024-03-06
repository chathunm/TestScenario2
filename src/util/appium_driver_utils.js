const { writeFileSync, stat } = require('fs')
const propertiesReader = require('properties-reader')
const path = require("path")
const properties = propertiesReader(path.join(__dirname, '../config/config.properties'))
const { AppiumTestBase } = require('../core/appium_test_base')

const KEYCODE_BACK = 4

let methods = {

    takeScreenshot: async function () {
        const driver = await AppiumTestBase.getInstance().getDriver()
        const screenshotData = await driver.takeScreenshot()
        const rand_no = new Date().getTime()
        const screenshotFilePath = './screenshots/SS_' + rand_no + '.png'
        console.log('Screenshot Saved --------> File Path : ' + screenshotFilePath)
        writeFileSync(screenshotFilePath, screenshotData, 'base64')
    }
}
exports.data = methods