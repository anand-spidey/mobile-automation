import locators from '../data/locators.js'
import loginUsers from '../data/loginData.js'

class loginPage {
    get header() {
        return $(locators.loginPage.header);
    }
    get userName() {
        return $(locators.loginPage.userName);
    }
    get password() {
        return $(locators.loginPage.password);
    }
    get loginBtn() {
        return $(locators.loginPage.loginBtn);
    }
    get errorMsg() {
        return $(locators.loginPage.errorMsg);
    }
    get usernameErrorMsg() {
        return $(locators.loginPage.usernameErrorMsg);
    }
    get passwordErrorMsg() {
        return $(locators.loginPage.passwordErrorMsg);
    }

    loginToApp = async (userType) => {
        let userName = loginUsers[userType].username;
        let password = loginUsers[userType].password;
        await this.userName.setValue(userName);
        await this.password.setValue(password);
        await this.loginBtn.click();
    }
}

export default new loginPage();