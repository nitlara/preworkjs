// Write your function here

function areValidCredentials(n1,n2){
    return ((n1.length > 3) & (n2.length > 8))
}

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);