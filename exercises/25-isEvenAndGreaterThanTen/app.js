// Write your function here
function isEvenAndGreaterThanTen(n){
    return ((Math.abs(n % 2) == 0)) && (n > 10);
}

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false