const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');
const colorKeywords = require('colorKeywords');
// 
const colorInput = "";

const questions = () => inquirer.prompt([
  {
    type: 'input',
    name: 'logoName',
    message: 'Enter up to three characters',
    validate: (chacName) => {
      if (chacName.length > 3) {
        return 'You must enter three characters to name the logo';
      } else if (chacName.length < 3) {
        return 'You must enter three characters to name the logo';
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color keyword or a hexadecimal number',
    when: (answer) => {
      if (answer.textColorUser == colorKeywords) {
        return true;
      }
    },
    validate: (answer) => {
      const regex = "/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/";
      if (!answer.textColor.match(regex)) {
        return console.log('You must enter a valid color/hexadecimal');
      }
      return true;
    }
  },
  {
    type: 'list',
    name: 'logoShape',
    message: 'Choose a shape for your SVG logo',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: "Enter the shape's color keyword of a hexadecimal number"
  },
]);

// maybe generateLogoSVG will be in another file.

// file will be write here.
function writeToFile(fileName, data) {
  const generate = shapes(data);
  try {
    fs.writeToFileSync(fileName, data); 
    console.log('Generating SVG Logo...');
  } catch (err) {
    console.log(err);
  }

}

function init () {
  questions().then((answers) => {
    console.log('SVG Logo is Generating...');
    writeToFile('logo.svg');
  })
}
init();