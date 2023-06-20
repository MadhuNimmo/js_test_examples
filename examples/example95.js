function foo() {
        return function b() { return; };
}
var qoute = foo(); //1
function bar() {
        qoute(); //2
}
bar(); //1