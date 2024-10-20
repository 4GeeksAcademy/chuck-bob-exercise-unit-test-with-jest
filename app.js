// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to yen
    let valueInYen = valueInDollar * 146.26;
    // return the yen value
    return Math.round(valueInYen * 100) / 100;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInDollar to yen
    let valueInPound = valueInYen * .0055;
    // return the yen value
    return Math.round(valueInPound * 100) / 100;
}







// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

