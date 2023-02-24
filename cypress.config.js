const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: true,
    defaultCommandTimeout: 10000,
    experimentalWebKitSupport: true,
    video: true,
    screenshotOnRunFailure: false
  },
});
