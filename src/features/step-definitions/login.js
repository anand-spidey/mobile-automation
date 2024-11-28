import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import homePage from '../../pageobjects/homePage.screen.js';
import loginPage from '../../pageobjects/loginPage.screen.js';



Before(async function () {
    await driver.execute('mobile: activateApp', { "appId": 'com.saucelabs.mydemoapp.rn' })
    await homePage.logOutApp();
    console.log('launched app...')
});

Given('I launch the mobile application', async () => {
    await homePage.homePageHeader.waitForExist();
    await expect(homePage.homePageHeader).toExist();
});


Then('I Navigate to login page', async () => {
    await homePage.navigateToLoginPage();
    await expect(loginPage.header).toExist();
});


When('I login using {string} user with Username and Password', async (userType) => {
    await loginPage.loginToApp(userType);
});


Then('login should sucessful and redirect to homepage', async () => {
    await homePage.homePageHeader.waitForExist();
    await expect(loginPage.loginBtn).not.toBeExisting();
});

Then('login should not sucessful with error msg for {string}', async (userType) => {
    switch (userType) {
        case 'LOCKED':
            await expect(loginPage.errorMsg).toHaveText('Sorry, this user has been locked out.')
            break;
        case 'NO_MATCH':
            await expect(loginPage.errorMsg).toHaveText('Provided credentials do not match any user in this service.')
            break;
        case 'NO_USER_DETAILS':
            await expect(loginPage.usernameErrorMsg).toHaveText('Username is required')
            break;
        case 'NO_PASSWORD':
            await expect(loginPage.passwordErrorMsg).toHaveText('Password is required')
            break;
        default:
            break;
    }
});

After(async function () {
    await driver.execute('mobile: terminateApp', { "appId": 'com.saucelabs.mydemoapp.rn' })
    console.log('closed app...')
});