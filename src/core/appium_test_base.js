const { beforeEach, afterEach } = require("mocha")
const app_config = require('../../config/app_config')
const wdio = require('webdriverio');

//Setting Mobile Testing Platform
const OS_PLATFORM = process.env.OS_PLATFORM || 'Android' //'Android' or 'iOS'

beforeEach(async function () {
    console.log('------------------- Before Each -- Initiating the Driver Session -----------------------------')
    await AppiumTestBase.getInstance().getDriver(true);
})

afterEach(async function () {
    console.log('------------------- After Each -- Deleting the Driver Session --------------------------------')
    const driver = await AppiumTestBase.getInstance().getDriver()
    await driver?.deleteSession()
})

class AppiumTestBase {

    static instance = new AppiumTestBase()
    driver;

    constructor() { }

    async getDriver(create = false) {
        if (!create && this.driver) {
            return this.driver;
        }
        this.driver = await this.createDriver()
        return this.driver;
    }

    static getInstance() {
        return this.instance
    }

    async createDriver() {
        console.log('------------------- Initializing the "' + OS_PLATFORM + '" Driver ----------------------------------------')
        const driver_cap = await app_config.data.app_Os_Config(OS_PLATFORM)
        return (await wdio.remote(driver_cap))
    }
}

module.exports.AppiumTestBase = AppiumTestBase;
