const personal_brand_name = "ratnesh-mono";

const json = {
  transforms: ["attribute/cti", "name/cti/kebab", "asset/base64"],
  buildPath: "build/json/tokens/",
  prefix: personal_brand_name,
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
      prefix: personal_brand_name,

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
      prefix: personal_brand_name,

      filter: {
        attributes: {
          category: "asset",
          type: "font",
        },
      },
    },
    {
      destination: "_sounds.json",
      format: "json/flat",
      filter: {
        attributes: {
          category: "asset",
          type: "sound",
        },
      },
    },
  ],
};

module.exports = json;
