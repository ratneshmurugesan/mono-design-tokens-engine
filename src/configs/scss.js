const scss = {
  transformGroup: "scss",
  buildPath: "build/scss/",
  files: [
    {
      destination: "_variables.scss",
      // format: "scss/variables",
      format: "scss/map-deep",
      mapName: "mono-scss-tokens",
      options: {
        outputReferences: true,
      },
    },
  ],
};

module.exports = scss;
