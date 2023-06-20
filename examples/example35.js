(function (){
        function bar() {
                return function(){ return "something" };
        }
        var p = { f: bar };
        var q = p.f(); //1
        q(); //2
        function foo() {
                q(); //2
        }
        foo(); //1
})() //1