const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

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
});