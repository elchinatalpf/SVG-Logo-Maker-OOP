const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Square, Circle } = require('./shapes');
const colorKeywords = require('./colorKeywords');
const svgLogoFile = require('./svgLogoFile');
const { userShape } = require('./shapeUser');

const colorInput = "";

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
      this.svgName = answers.svgName;
      this.textColor = answers.textColor;
      this.shapeSVG = answers.shapeSVG;
      this.bgColor = answers.bgColor;
    })
    // `../examples/${this.svgName}.svg `
    .then(() => {
      console.log('shapeSVG', this.shapeSVG);
      console.log('bgColor', this.bgColor);
      const logoShape = userShape({ shape: this.shapeSVG, color: this.bgColor });
      const generate = new svgLogoFile(logoShape, this.svgName, this.textColor);
      fs.writeFile(`./examples/${this.svgName}.svg`, generate(userShape(this.shapeSVG, this.bgColor), this.svgName, this.textColor), (err) => {
        err ? console.log(err) : console.log("SVG Logo is being generated...!");
      }
      );
    });
  }



}
module.exports = CLI;

