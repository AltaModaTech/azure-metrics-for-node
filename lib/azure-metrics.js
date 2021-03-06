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

var exports = module.exports;

/**
 * Azure Metrics client exports.
 */
var MetricsService = exports.MetricsService = require('./services/metricsservice');
var util = exports.Util = require('./util/util.js');


/**
* Creates a new MetricsService object.
* If no storageaccount or storageaccesskey are provided, the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables will be used.
*
* @param {string} [storageAccount]          The storage account.
* @param {string} [storageAccessKey]        The storage access key.
* @param {string} [host]                    The host address.
* @param {object} [authenticationProvider]  The authentication provider.
*/
exports.createMetricsService = function (storageAccount, storageAccessKey, host, authenticationProvider) {
  return new MetricsService(storageAccount, storageAccessKey, host, authenticationProvider);
};

/**
* Other exports.
*/
exports.Constants = require('./constants');
