// jest playwright options: https://github.com/playwright-community/jest-playwright#options
module.exports = {
  // https://playwright.dev/docs/api/class-browser/#browsernewcontextoptions
  contextOptions: {
    locale: 'de-DE',
  },
  // https://playwright.dev/docs/api/class-browsertype/#browsertypelaunchoptions
  launchOptions: {
    headless: true,
    devtools: false,
  },
};
