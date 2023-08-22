const { Triangle, Square, Circle } = require('./shapes');
const colorKeywords = require('colorKeywords');

describe("Shapes", () => {

  describe('Circle', () => {
    test('Should render shape with color', () => {
      const shape = new Circle();
      shape.setColor()
    });
  });

  describe('Circle', () => {
    test('Should render SVG', () => {
      const expectedSVG = [
        `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="beige" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="limegreen">iva</text>
      </svg>`
      ].join('');
      const circle = new Circle();
      expect(circle.render()).toEqual(expectedSVG);
    });
  });

  // describe("circle", () => {
  //   it("Should show the color choosen by the user", () => {
  //     const shape = new Circle("beige", "IVA", "LimeGreen");
  //     expect(shape.render()).toEqual(`<svg version="1.1"
  //     width="300" height="200"
  //     xmlns="http://www.w3.org/2000/svg">
  //     <circle cx="150" cy="100" r="80" fill="beige" />
  //     <text x="150" y="125" font-size="60" text-anchor="middle" fill="limegreen">iva</text>
  //     </svg>`);
  //   });
  // });

  // describe("Triangle", () => {
  //   test("It should show the colors/shape", () => {
  //     const shape = new Triangle("black", "LPF", "blue");
  //     expect(shape.render()).toEqual(`<svg version="1.1" 
  //     width="300" height="200"
  //     xmlns="http://www.w3.org/2000/svg">
  //     <polygon points="100, 15 200, 200 0, 200" fill="black"/>
  //     <text x="100" y="185" font-size="70" text-anchor="middle" fill="blue">LPF</text>
  //     </svg>`);
  //   });
  // });

  // describe("Square", () => {
  //   it("Render square shape", () => {
  //     const shape = new Square("red", "API", "white");
  //     expect(shape.render()).toEqual(`<svg version="1.1"
  //     width="300" height="200"
  //     xmlns="http://www.w3.org/2000/svg">
  //     <rect width="200" height="200" fill="red"/> 
  //     <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">API</text>
  //     </svg>
  //     `);
  //   });
  // });


});