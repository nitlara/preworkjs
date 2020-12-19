// Write your function here
function removeElement(a,b){
    var rmelement = [];
    for (var i = 0; i < a.length; i++){
        if (a[i] != b) {
            rmelement.push(a[i]);
        }
    }
        return rmelement;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]