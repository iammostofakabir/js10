let factorial = n => {
        let f = 1;
        while (n >= 1) {
            f = f * n;
            n = n - 1;
        }
        return f;
    }
    
let input = 4;
    
console.log(factorial(input));