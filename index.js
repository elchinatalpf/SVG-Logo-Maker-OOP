const inquirer = require('inquirer');
const fs = require('./node_modules/graceful-fs/graceful-fs');
const shapes = require('./lib/shapes'); // bring shape's name, no shapes.

const questions = () => inquirer.prompt([
  {
    type: 'input',
    name: 'logoName',
    message: 'Enter up to three characters'
  },
  {
    type: 'intput',
    name: 'textColor',
    message: 'Enter text color keyword or a hexadecimal number'
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

questions().then((answers) => {
  console.log('SVG Logo is Generating...');
  // this will change for sure.
});

// maybe generateLogoSVG will be in another file.

// file will be write here.
function writeToFile(fileName, data) {
  fs.writeToFile('SGV Logo', answers); 

}