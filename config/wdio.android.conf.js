const path = require("path");
const app_path = path.join(__dirname, '/../app/android/calculator.apk');

const AndroidWebdriverIO = {
    port: 4723,
    capabilities: { 
        platformName: 'Android',
        'appium:newCommandTimeout': 200,
        'appium:deviceName': 'sdk_gphone_x86_64',
        'appium:udid': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': app_path
    }
}

exports.data = AndroidWebdriverIO;