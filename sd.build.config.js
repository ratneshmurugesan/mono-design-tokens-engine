const StyleDictionaryPackage = require("style-dictionary");

const {
  scss,
  json,
  js,
  // ts,
  // web,
  // html,
  asset_scss,
  asset_json,
} = require("./configs");

console.log({ StyleDictionaryPackage });

module.exports = {
  source: [`tokens/**/*.json`, `tokens/**/*.yaml`],
  platforms: {
    scss,
    json,
    js,
    // ts,
    // web,
    // html,
    "assets/embed/scss": asset_scss,
    "assets/embed/json": asset_json,
  },
};
