var testInput = [
    "1122", // expected (1 + 2) = 3
    "1111", // expected (1+ 1+ 1+ 1) = 4
    "1234", // expected 0
    "9129",  // expected 9
    "74287774482387438874374927428979"
]

testInput.forEach(test => {
    main(test)
    
});
/*

-- make mini circular? no
-- add first digit as last digit?

-- find valid digits
-- sum them

*/

function main(digitstring) {
    console.log("found this string: ", digitstring);
    console.log("number of digits: ", digitstring.length);

    let goodDigits = []
    for (let i = 0; i < digitstring.length; i++) {
        let nextDigitIndex = (((i+1) == digitstring.length) ? 0 : (i+1))   // apply request for circular lookup

        let currentDigit = Number(digitstring[i])
        let nextDigit = Number(digitstring[nextDigitIndex])

        if (currentDigit === nextDigit) {
            goodDigits.push(currentDigit)
        }
    }

    console.log('found ', goodDigits.length, ' valid digits\n', goodDigits);

    let sum = 0;

    sum = goodDigits.reduce(
        (prev, curr) => {
            return prev += curr;
        },
        0
    );

    console.log("resulting sum: ", sum);

}