const assert = require('assert')
const appium_util = require('./appium_driver_utils')

let methods = {

    sleep: async function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },

    validateValueInElementByValueKey: async function (key, expected) {
        try {
            const actual_text = await appium_util.data.getElementTextByValueKey(key)
            assert.strictEqual(actual_text, expected)
        } catch (error) {
            await appium_util.data.takeScreenshot()
            throw error
        }
    }
} 
exports.data = methods