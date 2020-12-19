 //Write your function here
function findMinLengthOfThreeWords(a,b,c){
    var medida= 999999;
    var strings = [a, b, c];
    for (var i =0; i < strings.length; i++){
        medida = Math.min(medida, strings[i].length);
    }
    return medida;
    }

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); 

