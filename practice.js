var fs = require('fs');

var myNumber = undefined;

function addOne (){
  fs.readFile('output.text', function doneReading(err, fileContents){
    myNumber.parseInt(fileContents)
    myNumber ++;
  })
}

addOne()

console.log(myNumber);
