var https = require('https');

console.log('working')

var options = {
  host: "www.example.org",
  path: "/"
};

var cb = function(response){
  console.log('in response handler callback!');
  console.log("Respose", response)
}

console.log("Im about to make the request" );

https.request(options, cb).end();

console.log("ok requested!");
