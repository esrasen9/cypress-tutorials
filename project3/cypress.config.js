const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ga511b',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
