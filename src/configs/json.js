const json = {
  transformGroup: "js",
  transforms: ["attribute/cti", "name/cti/snake"],
  buildPath: "build/json/",
  files: [
    {
      destination: "_variables.json",
      format: "json/flat",
    },
  ],
};

module.exports = json;
