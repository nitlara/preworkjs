// Write your function here

function getElementsLessThan100AtProperty(obj,key){
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
        if (obj[key][i] < 100) {
            array10.push(obj.key[i]);
        }
    }
        return array10;
}
        
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]

