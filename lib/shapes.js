class Shapes {
  constructor() {
    this.color = "";
  }
  setColor(colorPar) {
    this.color = colorPar;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="100, 15 200, 200 0, 200" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };

//  Reference from: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Getting_Started
{
  /* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" /> do not need this.

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */
}
