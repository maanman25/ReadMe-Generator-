// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/blog/license/mit-0)'
  } else if (license === 'APACHE 2.0') {
    return '[![License: APACHE](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/blog/license/apache-2-0)'
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/blog/license/gpl-3-0)'
  } else if (license === 'BSD 3') {
    return '[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/blog/license/bsd-3-clause)'
  } else if (license === "None") {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data, github, email) {
  return `

  # ${data.title}  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Tests](#tests)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## License 

  This application is under ${data.license} Licensing.<br />
  Click the license badge above for more information regarding this license.

  ## Installation

    ${data.installation}

  ## Tests 

    ${data.test}

  ## Usage

  ${data.usage}

  ## Contributing 

  ${data.contributing}

  ## Questions
  Application questions? 
  
  GitHub Account: [${github}](https://github.com/${github})

  Have More Questions?!

  Email me here: ${email}
  

  `
}

module.exports = generateMarkdown;