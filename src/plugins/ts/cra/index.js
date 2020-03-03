const fs = require("fs-extra");
const path = require("path");

const Package = require("../../package");

module.exports = async targetDir => {
  const p = path.join(targetDir);
  await fs.copy(path.join(__dirname, "template"), p).then(() => {
    const pkg = new Package(targetDir);

    pkg.addScript({
      start: "react-scripts start",
      build: "react-scripts build",
      test: "react-scripts test",
      eject: "react-scripts eject"
    });

    pkg.addDependency({
      "react-scripts": "3.4.0"
    });

    return pkg.save();
  });
};
