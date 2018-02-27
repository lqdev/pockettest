var request = require('request');
var bodyParser = require('body-parser');

function getCode(config) {
    return new Promise((resolve,reject) => {
        request(config,function(err,res,body){
            resolve(body);
            reject(err);
        })
    })
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