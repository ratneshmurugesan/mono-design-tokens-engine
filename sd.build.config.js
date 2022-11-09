const StyleDictionaryPackage = require("style-dictionary");

const { json, asset_json } = require("./src/configs");

// console.log({ StyleDictionaryPackage });

module.exports = {
  source: [
    `src/tokens/core/**/*.json`,
    `src/tokens/semantic/**/*.json`,
    `src/tokens/component/**/*.json`,
    `src/tokens/assets/*.json`,
  ],
  platforms: {
    json,
    "assets/embed/json": asset_json,
  },
};
