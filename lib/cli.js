const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');
const colorKeywords = require('./colorKeywords');
const svgLogoFile = require('./svgLogoFile');

const colorInput = "";

class CLI {
  constructor (svgName, textColor, shapeSVG, bgColor) {
    this.svgName = svgName;
    this.textColor = textColor;
    this.shapeSVG = shapeSVG;
    this.bgColor = bgColor;
  }
  run() {
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'logoName',
        message: 'Enter up to three characters',
        validate: (chacName) => {
          return chacName.length === 3 ? true : 'You must enter three characters to name the logo';
        }
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color keyword or a hexadecimal number',
        validate: (answer) => {
          const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
          if (!answer.match(regex) && !colorKeywords.map(color => color.toLowerCase()).includes(answer.toLowerCase)) {
            return 'You must enter a valid color/hexadecimal';
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
    ]) 
    .then((answers) => {
      this.svgName = answers.svgName;
      this.textColor = answers.textColor;
      this.shapeSVG = answers.shapeSVG;
      this.bgColor = answers.bgColor;
    })
    // `../examples/${this.svgName}.svg `
    .then( () => {
      const generate = svgLogoFile;
      console.log(generate);
      fs.writeFile(fileName, generate, (err) => {
        err ? console.log(err) : console.log("Generating SVG Logo...");
      });
    });
  }



}
module.exports = CLI;


// file will be write here.
// function writeToFile(fileName, data) {
//   const generate = shapes(data);
//   try {
//     fs.writeToFileSync(fileName, data); 
//     console.log('Generating SVG Logo...');
//   } catch (err) {
//     console.log(err);
//   }

// }

// function init () {
//   questions().then((answers) => {
//     console.log('SVG Logo is Generating...');
//     writeToFile('logo.svg');
//   })
// }
// init();