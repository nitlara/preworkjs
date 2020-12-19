function getLastElementOfProperty(obj,key){
    if(null == obj[key]){ 
        return [];
    }
    if ( !Array.isArray(obj[key]) ){
        return [];
    }
    if ( !obj[key].length ){
        return [];
    }
    return obj[key][[key.length - 1]];
    }


var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5