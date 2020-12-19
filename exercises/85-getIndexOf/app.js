

function getIndexOf(letra, frase) {
  if (!frase.includes(letra)) {
    return -1;
  }
  for (var i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      return i;
    }
  }
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2