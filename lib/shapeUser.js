const { Circle, Triangle, Square } = require("./shapes");

const userShape = ( shape, color ) => {

  if (shape === "Circle") {
    let userShape = new Circle();
    userShape.setColor(color);
    return userShape.render();
  } else if (shape === "Triangle") {
    let userShape = new Triangle();
    userShape.setColor(color);
    return userShape.render();
  } else if (shape === "Square") {
    let userShape = new Square();
    userShape.setColor(color);
    return userShape.render();
  }
};

module.exports = { userShape };
