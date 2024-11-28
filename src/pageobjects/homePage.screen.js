import locators from '../data/locators.js'

class homePage {

    get homePageHeader() {
        return $(locators.homePage.header);
    }
    get hamBurgerBtn() {
        return $(locators.homePage.hamBurgerBtn);
    }
    get loginBtn() {
        return $(locators.sideBarOptions.loginBtn);
    }
    get logoutBtn() {
        return $(locators.sideBarOptions.logoutBtn);
    }
    get logoutHeader() {
        return $(locators.sideBarOptions.logoutHeader);
    }
    get logoutPopupBtn() {
        return $(locators.sideBarOptions.logOutPopUpBtn);
    }

    navigateToLoginPage = async () => {
        await this.homePageHeader.waitForExist();
        await this.hamBurgerBtn.click();
        await this.loginBtn.waitForExist();
        await this.loginBtn.click();
    }
    logOutApp = async () => {
        await this.hamBurgerBtn.click();
        await this.logoutBtn.waitForExist();
        await this.logoutBtn.click();
        let isExist = await this.logoutHeader.isExisting();
        if (isExist) {
            await this.logoutPopupBtn.click();
        }
        await driver.execute('mobile: terminateApp', { "appId": 'com.saucelabs.mydemoapp.rn' })
        await driver.execute('mobile: activateApp', { "appId": 'com.saucelabs.mydemoapp.rn' })
    }

}

export default new homePage();