// Write your function here
function areBothOdd(n1,n2){
    return ( Math.abs(n1 % 2) == 1) && (( Math.abs(n2 % 2) == 1));
}

var output = areBothOdd(1,3);
console.log(output);
