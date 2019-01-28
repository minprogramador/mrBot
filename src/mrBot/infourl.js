'use strict';

const http = require("http");

const curl = function(ip, port, path, callback) {
    var body = '';

    const cb = function(response) {
        response.on('data', function(chunk) {
            body = body + chunk;
        });
        response.on('end', function() {
            callback({'body': body, 'response': response});
        });
    };

	let options = {
		hostname: ip,
		port: port,
        path: path,
        method: 'GET'
    };

    const request = http.request(options, cb);
    request.on('error', function(err) {
        callback(err);
    });

	request.on('socket', (s) => {
		s.setTimeout(2000, () => {
			s.destroy();
		}
	)});

    request.end();
};

const getInfo = function(url, callback) {
	let ur = url.split(":");

	let ip = ur[0];
	let port = ur[1];
	let path = '/';

	curl(ip, port, path, function(res) {
		try {
			let body = JSON.parse(res.body);
			//console.log(body);
			callback(body);
		}catch(e) {
//			console.log('error');
			callback('error');
		}

	});
}

module.exports = function(url, callback) {

	getInfo(url, function(res) {
		callback(res);
	});

};


// function getInfo(callback) {
// 	const options = {
// 	  hostname: '191.96.139.176',
// 	  port: 7544,
// 	  path: '',
// 	  method: 'GET',
// 	  headers: {
// 	    'Content-Type': 'application/x-www-form-urlencoded'
// 	  }
// 	};


// 	const req = http.request(options, (res) => {
// 	  //console.log(`STATUS: ${res.statusCode}`);
// 	  //console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
// 	  res.setEncoding('utf8');
// 	  var res = '';
// 	  res.on('data', (chunk) => {
// //	    console.log(`BODY: ${chunk}`);
// 	    callback(chunk);
// 	  });
// 	  res.on('end', () => {
// 	    console.log('No more data in response.');
// 	  });
// 	});

// 	req.on('error', (e) => {
// 	  console.error(`problem with request: ${e.message}`);
// 	});

// 	// write data to request body
// 	req.end();

// }