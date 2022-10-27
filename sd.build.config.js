const StyleDictionaryPackage = require("style-dictionary");

const {
  // scss,
  // js,
  // ts,
  // web,
  // html,
  // asset_scss,
  json,
  asset_json,
} = require("./src/configs");

console.log({ StyleDictionaryPackage });

module.exports = {
  source: [`src/tokens/**/*.json`, `src/tokens/**/*.yaml`],
  platforms: {
    // scss,
    // js,
    // ts,
    // web,
    // html,
    // "assets/embed/scss": asset_scss,
    json,
    "assets/embed/json": asset_json,
  },
};
