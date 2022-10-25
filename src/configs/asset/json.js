const json = {
  transforms: ["attribute/cti", "name/cti/kebab", "asset/base64"],
  buildPath: "build/json/",
  files: [
    {
      destination: "_icons.json",
      format: "json/flat",
      filter: {
        attributes: {
          category: "asset",
          type: "icon",
        },
      },
    },
    {
      destination: "_images.json",
      format: "json/flat",
      filter: {
        attributes: {
          category: "asset",
          type: "image",
        },
      },
    },
    {
      destination: "_fonts.json",
      format: "json/flat",
      filter: {
        attributes: {
          category: "asset",
          type: "font",
        },
      },
    },
  ],
};

module.exports = json;
