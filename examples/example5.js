(function(arg1,arg2){ 
       arg1(); //2
})(function(){return "x";},function(){return "y";}) //1