module.exports = {
    default: {
    //   format: ['progress-bar', 'html:cucumber-report.html'],
      requireModule: ['ts-node/register'],
      require: ['./cucumber/steps/**.steps.ts'],
      worldParameters: {
        appUrl: 'https://www.amazon.com/'
      }
    }
  }
  