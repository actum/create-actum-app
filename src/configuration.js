const { prompt } = require("inquirer");

module.exports = async () => {
  const { type } = await prompt({
    name: "type",
    type: "list",
    message: "Which starter project you want to use?",
    choices: [
      { name: "create-react-app", value: "cra" },
      { name: "next.js", value: "next" },
      { name: "gatsby", value: "gatsby" }
    ]
  });

  const { includeStorybook } = await prompt({
    name: "includeStorybook",
    type: "list",
    message: "Include Storybook setup?",
    choices: [
      { name: "No", value: false },
      { name: "Yes", value: true }
    ]
  });

  /*
  const { includee2e } = await prompt({
    name: "includee2e",
    type: "list",
    message: "Include E2E tests setup?",
    choices: [
      { name: "No", value: false },
      { name: "Yes", value: true }
    ]
  });
  */

  return {
    type,
    includeStorybook
    // includee2e
  };
};
