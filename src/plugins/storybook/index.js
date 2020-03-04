const fs = require("fs-extra");
const path = require("path");

const Package = require("../package");

module.exports = async targetDir =>
  fs.copy(path.join(__dirname, "template"), targetDir).then(() => {
    const pkg = new Package(targetDir);

    pkg.addScript({
      storybook: "start-storybook"
    });

    pkg.addDevDependency({
      "@babel/core": "7.8.6",
      "@storybook/react": "^5.3.14",
      "babel-loader": "8.0.6"
    });

    return pkg.save();
  });
