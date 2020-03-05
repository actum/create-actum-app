const fs = require("fs-extra");
const path = require("path");

const Package = require("../../package");

module.exports = async targetDir =>
  fs.copy(path.join(__dirname, "template"), targetDir).then(() => {
    const pkg = new Package(targetDir);

    pkg.addScript({
      start: "react-app-rewired start",
      build: "react-app-rewired build",
      test: "react-scripts test",
      eject: "react-scripts eject"
    });

    pkg.addDependency({
      preact: "^10.3.3",
      "react-scripts": "3.4.0"
    });

    pkg.addDevDependency({
      "react-app-rewired": "^2.1.5"
    });

    return pkg.save();
  });
