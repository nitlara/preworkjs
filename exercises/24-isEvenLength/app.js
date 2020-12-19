// Write your function here
function isEvenLength(n){
    return (Math.abs(n.length % 2) == 0);
}

var output = isEvenLength('wow');
console.log(output);