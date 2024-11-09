{
  //

  interface Circle {
    shape: "circle";
    radius: number;
  }

  interface Rectangle {
    shape: "rectangle";
    height: number;
    width: number;
  }

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number =>
    shape.shape === "circle"
      ? parseFloat((Math.PI * shape.radius ** 2).toFixed(2))
      : shape.shape === "rectangle"
      ? shape.width * shape.height
      : 0;

  const circle: Circle = {
    shape: "circle",
    radius: 5,
  };

  const rectangle: Rectangle = {
    shape: "rectangle",
    width: 4,
    height: 6,
  };

  console.log(calculateShapeArea(circle));
  console.log(calculateShapeArea(rectangle));

  //
}
