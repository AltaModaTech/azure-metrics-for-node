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

var should = require('should');
var m = require('mocha');

// Lib includes
var azmet = require('../lib/azure-metrics');

var firstRun = true;

suite('Utilities', function () {
  setup(function (done) {
    if (firstRun) {
      firstRun = false;
    }

    done();
  });

  teardown(function (done) {
    done();
  });

  // Verify util's helpers
  test('Date part of valid Partition Key', function (done) {
    var partitionKey = "20120901T2300";
    var expectedDatePart = partitionKey.substr(0,8);
    var expectedTimePart = "2300";

    should.equal( azmet.Util.datePartOfPartitionKey(partitionKey), expectedDatePart );
    should.equal( azmet.Util.timePartOfPartitionKey(partitionKey), expectedTimePart );
    
    done();
  });

});