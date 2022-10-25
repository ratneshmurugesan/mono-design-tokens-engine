//     // "json": {
//     //   "transformGroup": "json",
//     //   "buildPath": "build/json/",
//     //   "files": [
//     //     {
//     //       "destination": "_variables.json",
//     //       "format": "json/flat"
//     //     }
//     //   ]
//     // },

const json = {
  transformGroup: "js",
  buildPath: "build/json/",
  files: [
    {
      destination: "_variables.json",
      format: "json/flat",
    },
  ],
};

module.exports = { json };
