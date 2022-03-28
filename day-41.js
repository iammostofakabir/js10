let getCount = objects => {
    let count = 0;
    for (let i in objects) {
        if (objects[i].x == objects[i].y) {
            count++
        }
    }
    return count;
}

let input = [{ x: 2, y: 2 }, { x: 1, y: 2 }, { x: 1, y: 3 }];

console.log(getCount(input));