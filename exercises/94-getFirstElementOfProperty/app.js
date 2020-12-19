function getFirstElementOfProperty(obj,key){
    if(null == obj[key]){ 
        return [];
    }
    if ( !Array.isArray(obj[key]) ){
        return [];
    }
    if ( !obj[key].length ){
        return [];
    }
    return obj[key][0];
}
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1