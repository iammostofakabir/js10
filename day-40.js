let Rectangle = (a, b) => {
    let object = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
    return object;
}

let a = 4; let b = 5;

console.log(Rectangle(a,b));