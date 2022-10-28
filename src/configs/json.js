const json = {
  transformGroup: "js",
  transforms: [
    "attribute/cti",
    "name/cti/snake",
    "time/seconds",
    "content/icon",
    "size/rem",
    "color/hsl",
    "asset/base64",
  ],
  buildPath: "build/json/",
  files: [
    {
      destination: "_variables.json",
      format: "json/flat",
    },
  ],
};

module.exports = json;
