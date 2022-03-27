let vowelsAndConsonants = s => {
    let consonant = []
    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log(s[i]);
        }
        else{
            consonant.push(s[i]);
        }
    }
    for(let j = 0; j <= consonant.length - 1; j++){
        console.log(consonant[j]);
    }
}

let input = 'javascriptloops'

vowelsAndConsonants(input);