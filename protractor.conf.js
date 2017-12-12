var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    allScriptsTimeout: 11000,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'mobileEmulation': {
                // 'deviceName': 'iphone',
                // 'deviceMetrics': { 'width': 412, 'height': 732 }, //Nexus 6P
            },
            'args': ['--window-size=520,840'],
        }
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () { }
    },
    specs: ['./e2e/**/*.e2e-spec.ts'],
    baseUrl: 'http://localhost:8100',
    useAllAngular2AppRoots: true,
    beforeLaunch: function () {

        require('ts-node').register({
            project: 'e2e'
        });

        require('connect')().use(require('serve-static')('www')).listen(8100);

    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter()),
            browser.ignoreSynchronization = true
    }

}