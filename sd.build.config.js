const StyleDictionaryPackage = require("style-dictionary");

const { scss } = require("./configs/scss");
const { json } = require("./configs/json");

const { json: assetJson } = require("./configs/asset/json");
const { scss: assetScss } = require("./configs/asset/scss");

console.log({ StyleDictionaryPackage });

module.exports = {
  source: [`tokens/**/*.json`, `tokens/**/*.yaml`],
  platforms: {
    scss,
    json,
    "assets/embed/scss": assetScss,
    "assets/embed/json": assetJson,
  },
};
