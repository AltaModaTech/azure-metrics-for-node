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

// Class definition
function Utils() {
}

// Static method for converting JSON data to simple html table
Utils.createMetricsTable = function (data) {
    var tblOuter = $('<table />');
        
    $.each(data, function(key, metrics) {
        var tblRowOuter = $('<tr/>').appendTo(tblOuter);
        var tblRowInner = $('<tr/>');
        
        $.each(metrics, function(name, value) {
            $('<td>' + name + ': ' + value + '</td>').appendTo(tblRowInner);
        });
        
        (tblRowInner.appendTo($('<table />'))).appendTo(tblRowOuter);
    });
    
    $("#metrics-container").append( tblOuter );
}
