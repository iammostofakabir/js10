let isPositive = a => {
    try {
        if (a == 0) {
            throw new Error("Zero Error");
        }
        else if (a < 0) {
            throw new Error("Negative Error");
        }
        else {
            throw new Error('YES');
        }
    }
    catch (err) {
        return (err.message);
    }
}

let input = '10';

console.log(isPositive(input));