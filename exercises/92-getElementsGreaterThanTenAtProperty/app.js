function getElementsGreaterThan10AtProperty(obj,key){
      if(null == obj[key]){ 
        return [];
    }
    if ( !Array.isArray(obj[key]) ){
        return [];
    }
    if ( !obj[key].length ){
        return [];
    }
    var array10 = [];
    for (var i = 0; i < obj[key].length; i++){
        if (obj[key][i] > 10) {
            array10.push(obj[key][i]);
        }
    }
        return array10;
}
        
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
