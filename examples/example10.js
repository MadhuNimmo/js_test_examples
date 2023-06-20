function foo(p, q) {
        p(); //2
}
function bar() {
        return;
}
var x = bar;
var y = bar;
foo(x, y); //1