function computeAverageOfNumbers(num){
    var total = 0;
         for (var i = 0; i < num.length; i++){
            total += num[i];
            }
            return total / num.length;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
