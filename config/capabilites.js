export const caps = {
    'one plus mobile': {
        capabilities: {
            'platformName': 'Android',
            'appium:platformVersion': '11.0', 
            'appium:deviceName': 'OnePlus HD1901',
            'appium:deviceId': '2e2523b8', 
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage':'com.oneplus.calculator',
            'appium:appActivity':'com.oneplus.calculator.Calculator'
        }
    },
    'samsung mobile': {
        capabilities: {
            'platformName': 'Android',
            'appium:platformVersion': '8.1.0', 
            'appium:deviceName': 'Samsung SM-G610F',
            'appium:deviceId': '5210a9e9532615c5', 
            'appium:automationName': 'UiAutomator2',
            'appium:appPackage':'com.saucelabs.mydemoapp.rn',
            'appium:appActivity':'com.saucelabs.mydemoapp.rn.MainActivity',
            'appium:noReset': 'false'
        }
    }
}