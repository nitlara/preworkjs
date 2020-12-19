// Write your function here
function addToBackOfNew(a,b){
    return a.concat(b);
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]