//Baby Steps

// var args = process.argv.slice(2);
// var sum = args.reduce(function(acc, curr){
//   return +acc + +curr;
// });
//
// console.log(sum);

// My First I/O

// var fs = require('fs');
//
// var contents = fs.readFileSync(process.argv[2]);
//
// var lines = contents.toString().split('\n').length - 1;
//
// console.log(lines);


// My First Asynchronous IO

var fs = require('fs');

fs.readFile(process.argv[2], function(err, contents){
var lines = contents.toString().split('\n').length - 1;
console.log(lines);
})
