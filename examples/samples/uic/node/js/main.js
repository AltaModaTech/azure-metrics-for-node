require(["jquery", "Set"], function($) {
    $(function(a1, b1, setVal) {
        
        var msg = "[main.js] ";
        var newSet = null;
        
        if (a1 !== null && a1 !== undefined) {
            if ($.isFunction(a1)) {
                msg += "a1 is a function(): " + a1.toString() + ", ";
            }
            else {msg += "a1, ";}
        }
        if (b1 !== null && b1 !== undefined) {
            msg += "b1, ";
        }
        if (setVal !== null && setVal !== undefined) {
            msg += "setVal, ";
        }
        else {
            newSet = new Set();
            msg += "newSet = " + newSet;
        }
        
        $('#forTest').append("<p>Called with " + msg + " </p>");
    });
});
