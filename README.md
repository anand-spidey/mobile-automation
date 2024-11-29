# Mobile Automation:

This repository contains a Mobile Automation Framework built using WebDriverIO and Appium. It is designed to automate testing for Android and iOS mobile applications, ensuring efficient and robust testing of mobile functionalities.

## Installation

npm install

## Features

- Cross-Platform Support: Automate Android and iOS apps.
- Test Framework: Built using WebDriverIO with Appium integration.
- Modular Design: Easy-to-maintain structure with page objects and reusable components.
- Reports: Generate detailed reports using Allure or Spec reporter.
- Parallel Execution: Supports parallel test execution.
- Configurable Capabilities: Easily switch between devices and platforms.

## .env File

- Provide the device name from caps to start automation

### Folder Conventions

mobile-repo/
├── config/
│   ├── android.conf.js
│   ├── capabilities.js
│
├── node_modules/
│
├── src/
│   ├── data/
│   │   ├── locators.js
│   │   ├── loginData.js
│   │
│   ├── features/
│   │   ├── step-definitions/
│   │   │   ├── login.js
│   │   ├── login.feature
│   │
│   ├── pageobjects/
│       ├── homePage.screen.js
│       ├── loginPage.screen.js
│
├── .env
├── .gitignore
├── common.conf.js
├── package-lock.json
├── package.json
├── README.md

### Run Test

```javascript
npm run android:mobile
```
### Generate Test report

after execution 

```javascript
npm run open-allure
```