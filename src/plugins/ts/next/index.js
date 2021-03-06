const fs = require("fs-extra");
const path = require("path");

const Package = require("../../package");

module.exports = async targetDir =>
  fs.copy(path.join(__dirname, "template"), targetDir).then(() => {
    const pkg = new Package(targetDir);

    pkg.addScript({
      dev: "next dev",
      build: "next build",
      start: "next start"
    });

    pkg.addDependency({
      next: "^9.2.2"
    });

    pkg.addDevDependency({
      "babel-plugin-styled-components": "^1.10.7"
    });

    return pkg.save();
  });
