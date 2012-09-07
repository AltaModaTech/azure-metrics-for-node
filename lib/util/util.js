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

/**
* Encodes an URI.
*
* @param {string} partitionKey The Azure Storage Metrics partition key.
* @return {string} The 8-digit date portion from the partition key.
*/
exports.datePartOfPartitionKey = function (partitionKey) {
  // TODO: regex is ^\d+  but substr proly faster
  return partitionKey.substr(0,8);
};

exports.timePartOfPartitionKey = function (partitionKey) {
  return partitionKey.match(/\d+$/);
};


