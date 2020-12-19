// Write your function here
function isOddLength(n){
    return ( Math.abs(n.length % 2) == 1);
}

var output = isOddLength('special');
console.log(output);