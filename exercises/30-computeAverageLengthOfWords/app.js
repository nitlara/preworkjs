// Write your function here
function computeAverageLengthOfWords(n1,n2){
    return ((n1.length+n2.length)/computeAverageLengthOfWords.length);
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); 