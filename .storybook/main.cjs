module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storyybook/addon-a11y'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },

  //Onde o storybook deve procurar por diretorios estáticos config do msw
  "staticDirs":[
    "../public"
  ],
  
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true
  }
}