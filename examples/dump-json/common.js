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

// NOTE: Azure-Metrics supports filtration by date.  The date below is provided
//  for demonstration purposes.  If you'd like to try the filtration features,
//  change the line below to:
//
//      options.beginDate = new Date().addDays(-3);
//
//  This change will cause Azure-Metrics to only return metrics from 3 days ago
//  and up.

var options = {};
options.beginDate = '20120101';

module.exports = options;
