function addProperty(myObj,key){
    myObj[key] = true;
    return myObj;
}

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> verdadero

