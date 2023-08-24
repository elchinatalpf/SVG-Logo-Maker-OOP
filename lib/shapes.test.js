const { Triangle, Square, Circle } = require('./shapes');
const SVG = require('./svgLogoFile');

// shape with its respective color just for test
describe("Circle", () => {
  test("Should render color shape Circle OK", () => {
    const shape = new Circle();
    shape.setColor("limegreen");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="limegreen" />`
    );
  });

  describe("Triangle", () => {
    test("Should render color shape Triangle OK", () => {
      const shape = new Triangle();
      shape.setColor("BlueViolet");
      expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="BlueViolet" />`
      );
    });
  });

  describe("Square", () => {
    test("Should render color shape Square", () => {
      const shape = new Square();
      shape.setColor("Indigo");
      expect(shape.render()).toEqual(
        `<rect width="200" height="200" fill="Indigo" />`
      );
    });
  });
});

// test of svgLogoFile content with Circle
describe("SVG", () => {
  test("Should render SVG with Circle shape", () =>{
    const shape = new Circle();
    shape.setColor('limegreen');
    const svg = new SVG('MyLogo', 'blue', shape.render());
    const expectedSVG = `
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="limegreen" />
    <text x="150" y="125" font-size="40" text-anchor="middle" fill="blue">MyLogo</text>
    </svg>`;
    expect(svg.render()).toEqual(expectedSVG.trim());
  });
});