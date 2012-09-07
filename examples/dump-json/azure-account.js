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

// NOTE: Two mechanisms exist for authentication.
//  1) Set Azure account name and key in this file - Each of these examples loads the
//      account name & key from this file.  This approach only works for these
//      examples.
//  2) Add Azure account name and key to environment - If the name and key are null 
//      or not provided, the environment variables AZURE_STORAGE_ACCOUNT & 
//      AZURE_STORAGE_ACCESS_KEY will be used.  This approach works for all code
//      using Azure-Metrics.

var AzureAccount = {
    accountName: null, // replace with your azure storage account name as a string
    accountKey: null   // replace with your azure storage account access key as a string
};

module.exports = AzureAccount;