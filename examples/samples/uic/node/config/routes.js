// Original from http://stackoverflow.com/questions/10216395/error-failed-to-lookup-view-in-express
var path = require("path");  
var fs = require('fs');

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendfile( 'views/default.html');
    });

    app.get('/views/*', function(req, res) {
        var filePath = path.join( __dirname, '/..' + req.url );
        res.render(filePath); 
    });

// NOTE: production code shouldn't just send js files on request.
    app.get('/js/*', function(req, res) {
        var filePath = path.join( __dirname, '/..' + req.url );
        res.sendfile(filePath); 
    });

    
    app.get('/data/capacity', function(req, res) {
        var filePath = path.join( __dirname, '../testdata/MetricsCapacityBlob.json' );
        console.log("Sending json data from " + filePath);
        fs.readFile(filePath, function(err, content) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(content, 'utf-8'); 
        });
    });

    app.get('/data/transactions', function(req, res) {
        var filePath = path.join( __dirname, '../testdata/MetricsTransactionsBlob.json' );
        console.log("Sending json data from " + filePath);
        fs.readFile(filePath, function(err, content) {
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end(content, 'utf-8'); 
        });
    });


    app.get('/about', function(req, res) {
        res.render('about/about', {title: 'About' } );
    });

};
