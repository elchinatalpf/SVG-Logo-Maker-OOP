const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./lib/shapes');

const colorInput = [];

const questions = () => inquirer.prompt([
  {
    type: 'input',
    name: 'logoName',
    message: 'Enter up to three characters'
  },
  {
    type: 'input',
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
  
});

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