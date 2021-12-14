function calculateCircleArea(radius){
  return (Math.PI * Math.pow(radius, 2));
}

function calculateTriangleArea(base, height){
  return ((base * height) / 2 );
}

function calculateRectangleArea(length, width){
  return ( length * width )
}

console.log(calculateCircleArea(5));
console.log(calculateTriangleArea(5, 2));
console.log(calculateRectangleArea(5, 2))