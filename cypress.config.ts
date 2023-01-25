import { defineConfig } from "cypress";


  
  module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    video:false,
  defaultCommandTimeout :10000,
  watchForFileChanges: false,
    e2e: {
      setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
      },
      baseUrl: 'https://example.cypress.io',
    },
  });
  
  

