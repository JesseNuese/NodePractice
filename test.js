const fs = require ('fs');

var targetFile = 'output.txt';

var combined = [];


for(var i = 20; i < process.argv.length; i ++){
	 combined.push(fs.readFileSynce(process.argv[i], 'utf8'))
	}
 
fs.writeFileSynce|targetFile(combined.join(''));
