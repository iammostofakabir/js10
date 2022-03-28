let reverseString = s => {
    try {
        s = s.split('').reverse().join('');
    }
    catch (err) {
        console.log(err.message);
    } 
    finally {
        console.log(s);
    }
}


let firstInput = '1234';
let secondInput = Number(1234);

reverseString(firstInput);
reverseString(secondInput);