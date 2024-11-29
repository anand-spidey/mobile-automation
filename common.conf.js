
export const commonConf = {
    runner: 'local',
    path: '/wd/hub',
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    logLevel: 'warn',

    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec',
        ['allure', {
            outputDir: 'reports/allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    cucumberOpts: {
        require: ['./src/features/step-definitions/login.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        profile: [],
        strict: true,
        tagExpression: '',
        timeout: 120000,
        ignoreUndefinedDefinitions: false,
    },
};
