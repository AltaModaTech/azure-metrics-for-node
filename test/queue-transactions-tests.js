/**
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

var _ = require('underscore');
var should = require('should');
var date = require('datejs');

// Test includes
var testOpts = require('./utils/test-options.js');

// Lib includes
var azmet = require('../lib/azure-metrics');

var firstRun = true;

  function doCall(fn, opts, cb) {
    fn( opts, cb );
  }
  


suite('Queue Transactions Metrics tests', function () {
  setup(function (done) {
    if (firstRun) {
      firstRun = false;
    }

    done();
  });

  teardown(function (done) {
    done();
  });

  
  test('Retrieve ALL', function (done) {
    var svc = azmet.createMetricsService();
    svc.getQueueTransactions( function(error, entities) {
        should.not.exist( error );
        entities.should.exist;
        entities.should.not.be.empty;
        
        done();
    });
  });

  
  test('Retrieve previous 3 days', function (done) {
    var today = new Date();
    var opts = {};
    opts.beginDate = testOpts.Dates.DaysAgo3;
    
    var svc = azmet.createMetricsService();
    svc.getQueueTransactions( opts, function(error, entities) {
        should.not.exist( error );
        entities.should.exist;
        entities.should.not.be.empty;

        _.reject( _.pluck(entities, "PartitionKey"), function(partKey) {
            // Validate those that match (returning an item means it's valid)
            if (azmet.Util.datePartOfPartitionKey(partKey) >= opts.beginDate.toString('yyyyMMdd')) {
                return partKey;
            }
        }).should.be.empty;
        
        done();
    });
  });

test('Retrieve range b/t 3 & 5 days ago', function (done) {
    var opts = {};
    opts.beginDate = testOpts.Dates.DaysAgo5;
    opts.endDate = testOpts.Dates.DaysAgo3;
    
    var svc = azmet.createMetricsService();
    svc.getQueueTransactions( opts, function(error, entities) {
        should.not.exist( error );
        entities.should.exist;
        entities.should.not.be.empty;
        
        _.reject( _.pluck(entities, "PartitionKey"), function(partKey) {
            // Validate those that match (returning an item means it's valid)
            if (azmet.Util.datePartOfPartitionKey(partKey) >= opts.beginDate.toString('yyyyMMdd')
                    && azmet.Util.datePartOfPartitionKey(partKey) <= opts.endDate.toString('yyyyMMdd')) {
                return partKey;
            }
        }).should.be.empty;
        
        done();
    });
  });

  
  test('Retrieve non-existent historic range', function (done) {
    var today = new Date();
    var opts = {};
    opts.beginDate = Date.parse('1-1-2010');
    opts.endDate = Date.parse('12-31-2010');
    
    var svc = azmet.createMetricsService();
    svc.getQueueTransactions( opts, function(error, entities) {
        should.not.exist( error );
        entities.should.be.empty;

        done();
    });
  });
  
  test('Retrieve non-existent future range', function (done) {
    var today = new Date();
    var opts = {};
    opts.beginDate = today.addYears(1);
    opts.endDate = today.addYears(2);
    
    var svc = azmet.createMetricsService();
    svc.getQueueTransactions( opts, function(error, entities) {
        should.not.exist( error );
        entities.should.be.empty;

        done();
    });
  });
  
});

