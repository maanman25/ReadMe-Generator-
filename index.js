// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')

// // TODO: Create a function to initialize app
function init() {
// List of Questions
inquirer
    .prompt([   
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short desciption of your project:"
    },
    {
        type: 'list',
        name: 'license',
        message: "What type of license should your project have?",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'installation',
        default: 'npm i',
        message: "What command should be run to install dependencies?"
    },
    {
        type: 'input',
        name: 'test',
        default: 'node index.js',
        message: "What command should be run to test application?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the process to implement the application?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How can the user contribute?"
    }
]).then((responses) => {
    const github = responses.github;
    const email = responses.email;
    const markdown = generateMarkdown(responses, github, email);

    fs.writeFile('./NewREADME/README.md', markdown, (err) => 
    err ? console.log(err) : console.log("Successfully generated ReadMe.")
    )
})
}
// // Function call to initialize app
init();