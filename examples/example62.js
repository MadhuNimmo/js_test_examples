(function(){
        var o = {};
        Object.defineProperty(o, 'a', {
        get: function(){ return "1"} ,  
        configurable: false
        });
        Object.defineProperty(o, 'b', {
        get: function(){ return "2"},
        configurable: false
        });
        o.a; //1 //may not be captured in SCG
})() //1