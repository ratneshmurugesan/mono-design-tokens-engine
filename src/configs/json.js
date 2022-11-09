const personal_brand_name = "ratnesh-mono";

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
  buildPath: "build/json/tokens/",
  prefix: personal_brand_name,
  files: [
    {
      destination: "_styles.json",
      format: "json/flat",
      filter: function (token) {
        if (token.attributes.category !== "asset") return true;
        if (token.attributes.category === "asset") return false;
        // console.log({ check: token.attributes.category });
      },
    },
  ],
};

module.exports = json;
