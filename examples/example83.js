function foo() {
        var x = function () { return; };
        var y = function () {
                x(); //1
        };
        return y;
}
foo()(); //1 //2