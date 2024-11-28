const results = {
    homePage: {
        header: '//android.view.ViewGroup[@content-desc="longpress reset app"]/android.widget.ImageView',
        hamBurgerBtn: '//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'
    },
    sideBarOptions: {
        loginBtn: '//android.view.ViewGroup[@content-desc="menu item log in"]',
        logoutBtn: '//android.view.ViewGroup[@content-desc="menu item log out"]',
        logoutHeader : '//android.widget.TextView[@resource-id="android:id/message"]',
        logOutPopUpBtn : '//android.widget.Button[@resource-id="android:id/button1"]'
    },
    loginPage: {
        header: '//android.widget.TextView[@text="Select a username and password from the list below, or click on the usernames to automatically populate the username and password."]',
        userName: '//android.widget.EditText[@content-desc="Username input field"]',
        password: '//android.widget.EditText[@content-desc="Password input field"]',
        loginBtn: '//android.view.ViewGroup[@content-desc="Login button"]',
        afterLoginHeader: '//android.view.ViewGroup[@content-desc="Go Shopping button"]',
        errorMsg : '//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView',
        usernameErrorMsg : '//android.view.ViewGroup[@content-desc="Username-error-message"]/android.widget.TextView',
        passwordErrorMsg : '//android.view.ViewGroup[@content-desc="Password-error-message"]/android.widget.TextView'
    }
}

export default results;