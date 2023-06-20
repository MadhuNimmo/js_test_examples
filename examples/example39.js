(function() {
        var fns = arguments;
        fns[0]("x"); //2 //may not be captured in SCG
})(function(ans){return ans},function(){return "z"}) //1