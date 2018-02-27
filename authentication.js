var request = require('request');
var bodyParser = require('body-parser');

function getCode(config) {
    Promise.resolve(request(config,function(err,res,body){
        return body;
    }));
}

function getToken(config) {
    request(config,function(err,res,body){
        if(!err) {
            return JSON.parse(body)['access_token'];
        }
        console.error(err);
    })
}

module.exports = {
    getCode: getCode,
    getToken: getToken
}