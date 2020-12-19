// Write your function here
function isEitherEven(n1,n2){
        return ( Math.abs(n1 % 2) == 0) || (( Math.abs(n2 % 2) == 0));
}

var output = isEitherEven(1,4);
console.log(output);