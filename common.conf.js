
export const commonConf = {
    runner: 'local',
    path: '/wd/hub',
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    logLevel: 'warn',

    services: ['appium'],
    framework: 'cucumber',
    reporters: ['spec'],

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
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
};
