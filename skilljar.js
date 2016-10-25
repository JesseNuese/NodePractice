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


// My First Asynchronous I/O

// var fs = require('fs');
//
// fs.readFile(process.argv[2], function(err, contents){
// var lines = contents.toString().split('\n').length - 1;
// console.log(lines);
// })

// Filtered List

// var fs = require('fs');
// var path = require('path');
//
//
// fs.readdir(process.argv[2], function(err, list){
//   list.forEach(function (file){
//     if (path.extname(file) === '.' + process.argv[3])
//     console.log(file)
//   });
//
// });


// Exploring Modularity

var mymodule = require ('./bootcamp.js')
