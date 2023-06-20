(function () {
        function foo(event) {
                event(); //2
        }
        var bar = function () {
                return;
        };
        foo(bar); //1
})(); //1