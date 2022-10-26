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
} = require("./src/configs");

console.log({ StyleDictionaryPackage });

module.exports = {
  source: [`src/tokens/*.json`],
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
