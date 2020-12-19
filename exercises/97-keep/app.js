// Write your function here// Write your function here
function keep(a,b){
    var keepA = [];
    for (var i = 0; i < a.length; i++){
        if (a[i] == b) {
            keepA.push(a[i]);
        }
    }
        return keepA;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output);// --> [2, 2]