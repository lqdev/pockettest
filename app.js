//Node Modules
var express = require('express');
var request = require('request');
var open = require('open');
var bodyParser = require('body-parser');
var NodeCache = require('node-cache');

var credentialCache = new NodeCache();

//Custom Modules
var auth = require('./authentication');
var config = require('./config');

var app = express();

var port = process.env.port || 3979;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/authentication',function(req,res){
    if(res.statusCode != 200){
        console.error('Not authenticated');
    }
    res.json({"message":"Welcome"});
});

app.listen(port,function(err){
    if(!err){
        console.log(`Listening on port ${port}`);
    }
});

function storeResult(x,v){
    x['code'] = v;
}

auth.getCode(config.code)
    .then((code) => {
        credentialCache.set('code',code);        
    });

var x = credentialCache.get('code');

console.log(x);
