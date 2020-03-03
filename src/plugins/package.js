const fs = require("fs-extra");
const path = require("path");
const sortObject = require("./sort-object");

function Package(targetDir) {
  this.targetDir = targetDir;
  this.pkg = require(path.join(targetDir, "package.json"));
}

Package.prototype.addDependency = function(dependency) {
  this.pkg.dependencies = {
    ...this.pkg.dependencies,
    ...dependency
  };
};

Package.prototype.addDevDependency = function(dependency) {
  this.pkg.devDependencies = {
    ...this.pkg.devDependencies,
    ...dependency
  };
};

Package.prototype.addScript = function(script) {
  this.pkg.scripts = {
    ...this.pkg.scripts,
    ...script
  };
};

Package.prototype.save = async function() {
  this.pkg.devDependencies = sortObject(this.pkg.devDependencies);
  this.pkg.dependencies = sortObject(this.pkg.dependencies);

  await fs.writeFile(
    path.join(this.targetDir, "package.json"),
    JSON.stringify(this.pkg, null, 2)
  );
};

module.exports = Package;
