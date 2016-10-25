var express = require ('express');
var app = express();

var midware = (req,res,next) =>{
  console.log('middleware1 shoots');
  next();
};

app.use(midware);

app.get('/', (req, res) => {
  console.log("GET root");
  res.send("<h1>Out Here</h1>");
})


var PORT = process.env.PORT || 8080;

app.listen(PORT, (err) =>{
  if(err){
    console.log("Server Error", err);
    process.exit[1];
  }
  console.log("Server is up and listening to port", PORT);
})
