const web = {
  transformGroup: "web",
  transforms: ["attribute/cti", "name/cti/snake"],
  buildPath: "build/web/",
  files: [
    {
      destination: "_variables.scss",
      format: "scss/variables",
    },
  ],
};

module.exports = web;
