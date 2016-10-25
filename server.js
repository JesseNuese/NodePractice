const express = require('express');

var app = express();

var PORT=process.env.PORT || 8080;

app.use(express.static('public'));
console.log("We Made it")

app.get('/',(req, res) =>{
  // res.send("<h1> Hello World </h1>");
  res.sendFile(__dirname+'/index.html')
  console.log("Here I am");
})

app.get('/about.html', (req, res) =>{
  res.sendFile(__dirname+'/about.html')
})


//Listener
app.listen(PORT, (err) => {
  if(err){
    console.log('Server Error');
    process.exit(1);
  };
  console.log('Server is up and listening to port'+ PORT);
})
