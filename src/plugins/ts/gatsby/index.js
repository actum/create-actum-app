const fs = require("fs-extra");
const path = require("path");

const Package = require("../../package");

module.exports = async targetDir =>
  fs.copy(path.join(__dirname, "template"), targetDir).then(() => {
    const pkg = new Package(targetDir);

    pkg.addScript({
      build: "gatsby build",
      start: "gatsby develop"
    });

    pkg.addDependency({
      "gatsby-link": "^2.2.4",
      "gatsby-plugin-react-helmet": "^3.1.3",
      "gatsby-plugin-typescript": "^2.1.2",
      "react-helmet": "^5.2.1"
    });

    pkg.addDevDependency({
      "@types/react-helmet": "^5.0.15",
      gatsby: "^2.13.51"
    });

    return pkg.save();
  });
