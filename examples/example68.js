(function(){
        var x = new Function('return "x"');
        var obj={}
        obj["xyz"] = x;
        obj["x"+"yz"]() //1 //may not be captured in SCG
})() //1