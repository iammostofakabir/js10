let getArea = (length, width) => {
    let area;
    area = length * width;
    return area;
}

let getPerimeter = (length, width) => {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
}

let length = 3;
let width = 4.5;

console.log(getArea(length, width));
console.log(getPerimeter(length, width));