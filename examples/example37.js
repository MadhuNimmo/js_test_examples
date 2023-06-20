(function(){
        var xyz = ['yes',['no',function(){return}]]
        function bar(x1,y1){
                var controllers={}
                controllers[x1]=y1[1]
                controllers[x1]() //1 //may not be captured in SCG
        }
        bar.call(this,"x1",xyz[1]) //1
})() //1