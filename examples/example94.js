(function () {
        function foo(arg) {
                if (arg == "x") {
                        return foo(); //1
                } else {
                        return bar(); //1
                }
        }
        function bar() {
                return;
        }
        var next = foo("x"); //1
})(); //1