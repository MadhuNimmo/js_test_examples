var obj = {"xyz": function(){return 'xyz'}}
function bar(){
        var abc = obj['xy'+'z']
        abc.call(this) //1 //may not be captured in SCG
}
bar() //1