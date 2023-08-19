class Shapes {
  constructor (svgName, textColor, shapeSVG, bgColor) {
    this.svgName = svgName;
    this.textColor = textColor;
    this.shapeSVG = shapeSVG;
    this.bgColor = bgColor;
  }

}
// circle the same from shape
// constructor
class Circle extends of Shapes {
  constructor (svgName, textColor, shapeSVG, bgColor) {
    super(svgName, textColor, shapeSVG, bgColor);
  };
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.svgName}</text>
    </svg>`
  };
}

// Square extends from Shape
// constructor
class Square extends of Shapes {
  constructor () {
    super(svgName, textColor, shapeSVG, bgColor);
  };
  render() {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="${this.bgColor}"/> 
    <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.svgName}</text>
    </svg>
    `
  };
}

class Triangle extends of Shapes {
  constructor () {
    super(svgName, textColor, shapeSVG, bgColor);
    return `<svg version="1.1" 
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <polygon points="100, 15 200, 200 0, 200" fill="${this.bgColor}"/>
    <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`
  };
}

// class Triangle will take from shape
// constructor

// maybe this will be separeted into different files.

module.exports = { Triangle, Square, Circle } // Shapes


//  Reference from: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" /> do not need this.

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}