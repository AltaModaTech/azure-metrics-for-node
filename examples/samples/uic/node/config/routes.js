/*
* Copyright (c) AltaModa Technologies, LLC.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var path = require("path");  
var fs = require('fs');
var azmet = require('azure-metrics-for-node');

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

    
    app.get('/blob/capacities', function(req, res) {
        var azm = azmet.createMetricsService();
        if (azm) {
            azm.getBlobCapacities( function(err, content) {
                if (err) res.writeHead(500, err.message);
                else if (!content.length) res.writeHead(404);
                else {
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write( JSON.stringify(content), 'utf-8');
                }
                res.end();
            });
        }
    });

    app.get('/blob/transactions', function(req, res) {
        var azm = azmet.createMetricsService();
        if (azm) {
            azm.getBlobTransactions( function(err, content) {
                if (err) res.writeHead(500, err.message);
                else if (!content.length) res.writeHead(404);
                else {
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.write( JSON.stringify(content), 'utf-8');
                }
                res.end();
            });
        }
    });

    
    app.get('/about', function(req, res) {
        res.render('about/about', {title: 'About' } );
    });
};
