
var http = require('http');

//The url we want is `www.nodejitsu.com:1337/`
var options = {
  host: 'http://challenge.code2040.org/api/register',
  path: '/',
  //since we are listening on a custom port, we need to specify it by hand
  port: '80',

  json : true,
  //This is what changes the request to a POST request
  method: 'POST'
};



//This is the data we are posting, it needs to be a string or a buffer
var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

var obj = {"email":"atlsaber@gmail.com", 
		"Github" : "https://github.com/Atlrrific/CODE2040Challenge.git"
		};

req.write(JSON.stringify(obj));
req.end();
