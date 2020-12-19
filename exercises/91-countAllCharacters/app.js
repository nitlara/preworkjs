/*
Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string. 
https://repl.it/@tiffanyw/countAllCharacters#main.js <-- REVISAR 
Notes: If given an empty string, countAllCharacters should return an empty object.
*/



function countAllCharacters(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}


//done with reduce() ========================================

function countAllCharactersB(str) {
  var arr = str.split("");
  var result = arr.reduce(function(allChars, char) {
    if (char in allChars) {
      allChars[char]++;
    } else {
      allChars[char] = 1; 
    }
    return allChars;
  }, {});
  return result;
}

countAllCharactersB('banana');