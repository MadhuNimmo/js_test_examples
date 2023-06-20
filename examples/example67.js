(function(){
        var render = new Function("return 5");
        function foo(){
                return render.call(this); //1 //may not be captured in SCG
        }
        foo() //1
})() //1