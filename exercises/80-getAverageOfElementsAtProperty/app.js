function getAverageOfElementsAtProperty(obj, key){
    if(null == obj[key]){ 
        return 0;
    }
    if ( !Array.isArray(obj[key]) ){
        return 0;
    }
      }
    if ( !obj[key].length ){
        return 0;
    }

var sum = 0;
    for (var i = 0; i < obj[key].length; i++) {
        sum = sum + obj[key][i];
    }
var mean = sum / obj[key].length
return mean;
}

var obj = {
key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2