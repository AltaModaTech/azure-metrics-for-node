(function () {

    var Setctor = 
        function Set() { // ctor
            this.Hello = "Hello property";
        };
        
        Set.prototype.contains = function(value) {
            return true; // BUGBUG:
        };
        
        Set.prototype.sayHello = function() {
            return "Hello!";
        };
        
        Set.prototype.size = function() { return this.n; };
        
        return Setctor;
        
}());  // invoke fn immed'ly after defining

/*
define(["Set", "utils"], function(Set, utils) {

    var set = "foo!";
    
    return set;
});
*/

