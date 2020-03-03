const chalk = require("chalk");
const { sync: commandExists } = require("command-exists");
const execa = require("execa");
const ora = require("ora");
const path = require("path");
const replace = require("replace");

const configuration = require("./configuration");
const base = require("./plugins/ts/base");
const cra = require("./plugins/ts/cra");
const next = require("./plugins/ts/next");

let spinner = ora({
  color: "red"
});

const webCreator = {
  cra,
  next
};

async function create(name) {
  const { type, includee2e, includeStorybook } = await configuration();

  // run the generator
  spinner.start("Generating project");

  const targetDir = path.resolve(name);

  // Copy base template
  await base(targetDir);

  // Copy web template
  await webCreator[type](targetDir);

  // Copy storybook template
  // includeStorybook && (await storybook(name, targetDir));

  // Copy cypress templatee
  // includee2e && (await cypress(name, targetDir));

  // Replace `@projectName` with current project name from templates
  replace({
    regex: "@projectName",
    replacement: name,
    paths: [targetDir],
    recursive: true,
    silent: true
  });

  spinner.succeed(`Project generated at ${chalk.blue(targetDir)}`);

  // install dependencies
  spinner.start("Installing dependencies");
  await execa("yarn", ["install"], { cwd: targetDir });
  spinner.succeed("Dependencies installed");

  // If can find IDE CLI, use it to open project.
  if (commandExists("code")) {
    await execa("code", [targetDir]);
  } else if (commandExists("atom")) {
    await execa("atom", [targetDir]);
  } else if (commandExists("subl")) {
    await execa("subl", [targetDir]);
  }

  spinner.succeed(`${name} setup concluded`);
}

module.exports = name => {
  create(name).catch(error => {
    spinner.fail(`Error: ${error.message}`);
    console.log(error);
  });
};
