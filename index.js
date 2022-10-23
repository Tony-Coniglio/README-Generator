const inquirer = require('inquirer');
const fs = require('fs');

const writeToFile = ({ projectTitle, projectDescription, installationInstructions, usageInformation, contributionGuidelines, testInstrutions, license, github, email}) =>
    `
  # ${projectTitle}

  ## Description
  ${projectDescription}

  ## Installation
  ${installationInstructions}

  ## Usage
  ${usageInformation}

  ## Contributing
  ${contributionGuidelines}

  ## Tests
  ${testInstrutions}

  ## License
  ${license}

  ## Questions
  [My Github Profile](https://github.com/${github})

  Please email me with any questions you may have regarding my project @ ${email}

  `;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is your Project Title: ',
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please describe your project: ',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Please Enter Installation Instructions: ',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Please Enter Usage Information: ',
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Please Enter Contribution Guidelines: ',
        },
        {
            type: 'input',
            name: 'testInstrutions',
            message: 'Please Enter Test Instructions: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select license type',
            choices: ['MIT', 'Other'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github User Name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }


    ])
    .then((answers) => {
        const readmePageContent = writeToFile(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });