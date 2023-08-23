const { Triangle, Square, Circle } = require('./shapes');


describe("Circle", () => {
  test("Should render color shape Circle OK", () => {
    const shape = new Circle();
    shape.setColor("limegreen");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="80" fill="limegreen" />`
    );
  });

  describe("Triangle", () => {
    test("Should render color shape Triangle OK", () => {
      const shape = new Triangle();
      shape.setColor("BlueViolet");
      expect(shape.render()).toEqual(
        `<polygon points="100, 15 200, 200 0, 200" fill="BlueViolet" />`
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