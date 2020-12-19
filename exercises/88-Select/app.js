// Write your function here


function select(arr,obj){
    var output = {};
    for (var i = 0; i < arr.length; i++){
        if( obj[arr[i]] ){
            output[arr[i]] = obj[arr[i]];
        }
    }
 
    return output;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

/* altre resultat
// Write your function here


function select(arr,obj){
    var output = {};
    for (var i = 0; i < arr.length; i++){
        for(var prop in obj){
            if (arr[i] === prop) {
            output[prop] = obj[prop];
            }
        }
    } 
    return output;
}
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 } */

