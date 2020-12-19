// Write your function here

function getElementsThatEqual10AtProperty(obj,key){
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
        if (obj[key][i] == 10) {
            array10.push(10);
        }
    }
        return array10;
}
        
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
  

