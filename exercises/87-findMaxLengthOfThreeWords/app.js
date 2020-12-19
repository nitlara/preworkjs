 //Write your function here
function findMaxLengthOfThreeWords(a,b,c){
    var medida= 0;
    var strings = [a, b, c];
    for (var i =0; i < strings.length; i++){
        medida = Math.max(medida, strings[i].length);
    }
    return medida;
    }

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); 
