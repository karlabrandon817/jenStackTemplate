var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
var port = process.env.PORT || 8080;


var awardArray = [];

app.listen(port, function(req, res) {
    console.log('server listening on', port);
}); // end spin up server

// base url
app.get('/', function(req, res) {
    console.log('base url hit');
    res.sendFile(path.resolve('views/index.html'));
}); // end base url

// testGet
app.get('/testGet', function(req, res) {
    console.log('testGet url hit');
    res.send(awardArray);
    var objectToReturn = {
        field0: 'I came from testGet on server'
    }; // end object to return
    // return objectToReturn
    //  res.send(objectToReturn);
}); // end testGet

// testPost
app.post('/testPost', urlEncodedParser, function(req, res) {
    console.log('testPost url hit. req.body:', req.body);

    awardArray.push(req.body);
    console.log(awardArray);
    var objectToReturn = {
        field0: 'I came from testPost on server'
    }; // end object to return
    // return objectToReturn
    res.send(objectToReturn);
}); // end testPost

// static folder
app.use(express.static('public'));
