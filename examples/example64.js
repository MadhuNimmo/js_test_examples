(function(){
        var x = {
                foo: function(){ return "foo"},
                bar: function(){ return "bar"}
        }
        var x2 = {
                foo: function(){ return "foo"},
                bar: function(){ return "bar"}
        }
        var y = function(ans){ return ans}
        y(x).foo(); //1 //1
        x2.foo(); //1
})() //1