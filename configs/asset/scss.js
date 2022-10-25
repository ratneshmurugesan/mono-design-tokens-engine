const scss = {
  transforms: ["attribute/cti", "name/cti/kebab", "asset/base64"],
  buildPath: "build/scss/",
  files: [
    {
      destination: "_icons.scss",
      format: "scss/variables",
      filter: {
        attributes: {
          category: "asset",
          type: "icon",
        },
      },
    },
    {
      destination: "_images.scss",
      format: "scss/variables",
      filter: {
        attributes: {
          category: "asset",
          type: "image",
        },
      },
    },
    {
      destination: "_fonts.scss",
      format: "scss/variables",
      filter: {
        attributes: {
          category: "asset",
          type: "font",
        },
      },
    },
  ],
};

module.exports = { scss };
