function foo() {
        return (function foo2() {
                return function foo3() { return; };
        })(); //1
}
var bar = foo(); //1
bar(); //2