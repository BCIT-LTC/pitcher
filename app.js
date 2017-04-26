//var express = require("express");
//
//// https://www.npmjs.com/package/ssh-exec#usage
//var exec = require('ssh-exec');
// 
//// using ~/.ssh/id_rsa as the private key 
// 
//exec('ls -l', 'builder-prod@ltc.bcit.ca:22').pipe(process.stdout);
//
//

var request = require("request");
var payload = require("./payload.json");

request({
	method: 'POST',
	//uri: 'http://requestb.in/1dcst541',
	//uri: 'http://webhook.info/post/UXWNDJNSCF',
	uri: 'http://ltctest.bcit.ca:8080/catcher',
	json: payload
}, function (error, response, body) {
	console.log(response.statusCode);
});



function stashPayload() {
	return fs.readFileSync(payload.json);
};