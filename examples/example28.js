(function(){
        function foo(){ 
                return bar.apply(this); //1
        }
        function bar(){ 
                return foo;
        }
        foo.call(this); //1
})() //1