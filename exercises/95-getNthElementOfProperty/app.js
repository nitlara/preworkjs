function getNthElementOfProperty(obj,key){
    if(null == obj[key]){ 
        return [];
    }
    if ( !Array.isArray(obj[key]) ){
        return [];
    }
    if ( !obj[key].length ){
        return [];
    }
    return obj[key][1];
}


var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2