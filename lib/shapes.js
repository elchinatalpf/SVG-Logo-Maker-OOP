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
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect width="200" height="200" fill="${this.color}" />`;
  }
}

class Triangle extends Shapes {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };
