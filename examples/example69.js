(function(){
        var obj={}
        obj.xyz = function(){ return "X"}
        var y = obj.xyz
        var x = new Function("return " + y);
        x()(); //1 //2 //may not be captured in SCG
})() //1