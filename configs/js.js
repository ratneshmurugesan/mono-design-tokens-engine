const js = {
  transformGroup: "js",
  transforms: ["attribute/cti", "name/cti/constant", "size/remToPx"],
  buildPath: "build/js/",
  files: [
    {
      destination: "_variables.js",
      format: "javascript/es6",
    },
  ],
};

module.exports = js;
