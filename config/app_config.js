let os_config

let methods = {
    app_Os_Config: async function(OS_PLATFORM) {
        switch (OS_PLATFORM) {
            case 'Android':
                os_config = require('./wdio.android.conf')
                break;
            case 'iOS': //Out of Scope : Only focusing in the Android OS
                os_config = require('./wdio.ios.conf')
                break;
            default:
                break;
        }
        return os_config.data
    }
}

exports.data = methods;
