var request = require('request');

function getCode(config) {
    return new Promise((resolve,reject) => {
        request(config,(err,res,body) => {
            if(!err) {
                resolve(JSON.parse(body)['code']);
            } else {
                reject(err);
            }
        });
    });
}

function getToken(config) {
    return new Promise((resolve,reject)=>{
        request(config,(err,res,body) => {
            if(!err) {
                resolve(JSON.parse(body)['access_token']);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {
    getCode: getCode,
    getToken: getToken
}