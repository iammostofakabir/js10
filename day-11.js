// function factorial(n) {
//     let f = 1;
//     while (n >= 1) {
//         f = f * n;
//         n = n - 1;
//     }
//     return f;
// }

// let ans = 4;

// console.log(factorial(ans));

let factorial = n => {
        let f = 1;
        while (n >= 1) {
            f = f * n;
            n = n - 1;
        }
        return f;
    }
    
let ans = 4;
    
console.log(factorial(ans));