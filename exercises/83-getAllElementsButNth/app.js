// Write your function here
function getAllElementsButNth(obj,key){
      obj.splice(key, 1); 
    return obj;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']