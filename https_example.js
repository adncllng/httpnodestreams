var https = require('https');

console.log('working')

var options = {
  host: 'stream-large-file.herokuapp.com',
  path: '/give-me-stuff-now'
};

var cb = function(response){
  console.log('in response handler callback!');
  response.on('data', function(chunk){
    console.log('[-- CHUNK OF LENGTH ' + chunk.length + '--]');
    console.log(chunk.toString());
  })
}

console.log("Im about to make the request" );

https.request(options, cb).end();

console.log("ok requested!");
