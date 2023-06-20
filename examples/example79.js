var obj={
        handler: function(original){
                        return function(){
                                return original;
                        }
                },
        neon: function(){
                var newcall = function(){ return "newcall"}
                var retobj = obj["hand"+"ler"](newcall) //1 //may not be captured in SCG
                return retobj() //2 //may not be captured in SCG
        }
}
var now = obj["neon"]() //1 //may not be captured in SCG
now() //3 //may not be captured in SCG