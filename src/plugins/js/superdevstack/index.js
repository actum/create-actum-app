const fs = require("fs-extra");
const path = require("path");

const Package = require("../../package");

module.exports = async targetDir =>
  fs.copy(path.join(__dirname, "template"), targetDir);
