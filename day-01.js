let performOperation = (secondInteger, secondDecimal, secondString) => {
    const firstInteger = 4;
    console.log(firstInteger + parseInt(secondInteger));
    const firstDecimal = 4.0;
    console.log(firstDecimal + parseFloat(secondDecimal));
    const firstString = 'HackerRank ';
    console.log(firstString + secondString);
}

let secondInteger = 12;
let secondDecimal = 4.32;
let secondString = 'is the best place to learn and practice coding!';

performOperation(secondInteger, secondDecimal, secondString);