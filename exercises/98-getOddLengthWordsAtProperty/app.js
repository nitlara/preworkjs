function getOddLengthWordsAtProperty(obj,key){
    arrayOdd = [];
    if(null == obj[key]){ 
        return [];
    }
    if ( !Array.isArray(obj[key]) ){
        return [];
    }
    if ( !obj[key].length ){
        return [];
    }
    

    console.log(arrayOdd);
        for (var prop in obj[key]){
            if (Math.abs(obj[key][prop].length % 2) == 1){
                arrayOdd.push(obj[key][prop]);
            }
        }
        return arrayOdd;
}
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']