const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');
const colorKeywords = require('./colorKeywords');
const svgLogoFile = require('./svgLogoFile');
const { userShape } = require('./shapeUser');

// const colorInput = "";

class CLI {
  constructor () {
    this.svgName = "";
    this.textColor = "";
    this.shapeSVG = "";
    this.bgColor = "";
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
          if (!answer.match(regex) && !colorKeywords.map(color => color.toLowerCase()).includes(answer.toLowerCase())) {
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
      this.svgName = answers.logoName;
      this.textColor = answers.textColor;
      this.shapeSVG = answers.logoShape;
      this.bgColor = answers.shapeColor;
    })
    // `../examples/${this.svgName}.svg `
    .then(() => {
      const logoShape = userShape(this.shapeSVG, this.bgColor);
      const svgInstance = new svgLogoFile(this.svgName, this.textColor, logoShape);
      const generate = svgInstance.render();
      fs.writeFile(`./examples/${this.svgName}.svg`, generate, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('SVG Logo is being generated...!');
        }
      }
      );
    });
  }



}
module.exports = CLI;

