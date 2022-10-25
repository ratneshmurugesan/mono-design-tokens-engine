const ts = {
  transformGroup: "js",
  buildPath: "build/ts/",
  files: [
    {
      destination: "_variables.ts",
      format: "typescript/module-declarations",
    },
  ],
};

module.exports = ts;
