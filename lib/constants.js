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


var Constants = {
  /**
  * Constant representing the name of the Azure Table containing Azure Metrics Blob Capacities
  *
  * @const
  * @type {string}
  */
  CapacityBlobTableName: "$MetricsCapacityBlob",

  /**
  * Constant representing the name of the Azure Table containing Azure Metrics Blob Transactions
  *
  * @const
  * @type {string}
  */
  TransactionsBlobTableName: "$MetricsTransactionsBlob",

  /**
  * Constant representing the name of the Azure Table containing Azure Metrics Queue Transactions
  *
  * @const
  * @type {string}
  */
  TransactionsQueueTableName: "$MetricsTransactionsQueue",

  /**
  * Constant representing the name of the Azure Table containing Azure Metrics Table Transactions
  *
  * @const
  * @type {string}
  */
  TransactionsTableTableName: "$MetricsTransactionsTable",

};

module.exports = Constants;