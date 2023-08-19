const { Triangle, Square, Circle } = require('./lib/shapes');

describe("Shapes", () => {
  describe("circle", () => {
    it("Should show the figure choosen by the user", () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});