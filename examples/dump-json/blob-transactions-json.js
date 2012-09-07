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

var fs = require('fs');
if (!fs.existsSync) {
  fs.existsSync = require('path').existsSync;
}

var azuremetrics;
if (fs.existsSync('./../../lib/azure-metrics.js')) {
  azuremetrics = require('./../../lib/azure-metrics');
} else {
  azuremetrics = require('azure-metrics');
}

var azacct = require('./azure-account');
var common = require('./common');

var azmet = azuremetrics.createMetricsService( azacct.accountName, azacct.accountKey );
azmet.getBlobTransactions( common.options, function(error, transactionMetrics) {
    if (error === null) {
        console.log( JSON.stringify( transactionMetrics ) );
    }
    else {
        console.log("getBlobTransactions call returned error: " + error.message);
    }
});